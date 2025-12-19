// ========================================
// SMART URBAN DEVELOPMENT PROJECT - COMPLETE DATABASE
// ========================================

// Global data object - will be populated from API
let data = {};

// Load data from API
async function loadData() {
    console.log('loadData function called');
    const tables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    
    for (const table of tables) {
        console.log('Loading table:', table);
        try {
            const tableData = await fetchTableData(table);
            data[table] = tableData;
            console.log('Successfully loaded', tableData.length, 'records for', table);
        } catch (error) {
            console.error('Error loading table', table, ':', error);
            data[table] = [];
        }
    }
    
    // Add empty arrays for tables not in DB
    data.parkingReservations = [];
    data.wasteCollection = [];
    data.recyclingPlants = [];
    data.wasteTransport = [];
    data.emergencyVehicles = [];
    data.responseTime = [];
    console.log('loadData completed');
}

const titles = {
    traffic: 'Smart City Traffic Management',
    parking: 'Smart Parking - Available Spots',
    parkingReservations: 'Smart Parking - Reservations',
    waste: 'Waste Management - Waste Categories',
    wasteCollection: 'Waste Management - Collection Records',
    recyclingPlants: 'Waste Management - Recycling Plants',
    wasteTransport: 'Waste Management - Transportation Fleet',
    energy: 'Smart Energy Monitoring System',
    pollution: 'Air Quality & Pollution Monitoring',
    emergency: 'Emergency Response - Active Incidents',
    emergencyVehicles: 'Emergency Response - Vehicle Fleet',
    responseTime: 'Emergency Response - Performance Metrics',
    authorities: 'City Authorities Management',
    administrators: 'City Administrators',
    citizens: 'Citizens Registry'
};

let currentPage = 'home';
let selectedItem = null;

// Initialize
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOMContentLoaded fired');
    console.log('Starting initial loadData...');
    await loadData();
    console.log('Initial loadData completed');
    // initializeCharts(); // Initialize charts with loaded data - TEMPORARILY DISABLED
    setupEventListeners();
    showPage('home');
    console.log('Initialization completed');
});

// Event Listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    console.log('Total nav items found:', document.querySelectorAll('.nav-item').length);
    
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        console.log('Attaching nav listener to:', item);
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            console.log('Nav item clicked:', page);
            showPage(page);
            updateActiveNav(this);
        });
    });

    // Feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            showPage(page);
            updateActiveNavByPage(page);
        });
    });

    // Home page Add button
    const addBtnHome = document.getElementById('addBtnHome');
    if (addBtnHome) {
        addBtnHome.addEventListener('click', openAddModal);
    }

    // Home page Search button
    const searchBtnHome = document.getElementById('searchBtnHome');
    const searchBarHome = document.getElementById('searchBarHome');
    if (searchBtnHome && searchBarHome) {
        searchBtnHome.addEventListener('click', function() {
            if (searchBarHome.style.display === 'none' || searchBarHome.style.display === '') {
                searchBarHome.style.display = 'block';
                document.getElementById('searchInputHome').focus();
            } else {
                searchBarHome.style.display = 'none';
            }
        });
    }

    // Home page Refresh button
    const refreshBtnHome = document.getElementById('refreshBtnHome');
    console.log('refreshBtnHome element:', refreshBtnHome);
    if (refreshBtnHome) {
        console.log('Attaching event listener to refreshBtnHome');
        refreshBtnHome.addEventListener('click', function() {
            console.log('Refresh button clicked');
            const button = this;
            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Refreshing...</span>';
            button.disabled = true;
            
            // Call loadData asynchronously
            loadData().then(function() {
                console.log('loadData completed successfully');
                initializeCharts(); // Re-initialize charts with new data
                alert('Data refreshed successfully!');
            }).catch(function(error) {
                console.error('Refresh error:', error);
                alert('Failed to refresh data. Please try again. Error: ' + error.message);
            }).finally(function() {
                // Reset button state
                button.innerHTML = '<i class="fas fa-sync-alt"></i><span>Refresh Data</span>';
                button.disabled = false;
            });
        });
    } else {
        console.error('refreshBtnHome not found!');
    }

    // Data page Add button
    const addBtnTop = document.getElementById('addBtnTop');
    if (addBtnTop) {
        addBtnTop.addEventListener('click', openAddModal);
    }

    // Data page Search button
    const searchBtnTop = document.getElementById('searchBtnTop');
    const searchBarContainer = document.getElementById('searchBarContainer');
    if (searchBtnTop && searchBarContainer) {
        searchBtnTop.addEventListener('click', function() {
            if (searchBarContainer.style.display === 'none' || searchBarContainer.style.display === '') {
                searchBarContainer.style.display = 'block';
                document.getElementById('searchInput').focus();
            } else {
                searchBarContainer.style.display = 'none';
            }
        });
    }

    // Data page Refresh button
    const refreshBtnTop = document.getElementById('refreshBtnTop');
    if (refreshBtnTop) {
        refreshBtnTop.addEventListener('click', function() {
            console.log('Data page refresh button clicked');
            const button = this;
            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Refreshing...</span>';
            button.disabled = true;
            
            // Call loadData asynchronously
            loadData().then(function() {
                // Reload current page data
                if (currentPage !== 'home') {
                    loadTableData(currentPage);
                }
                console.log('Data page loadData completed successfully');
                alert('Data refreshed successfully!');
            }).catch(function(error) {
                console.error('Data page refresh error:', error);
                alert('Failed to refresh data. Please try again. Error: ' + error.message);
            }).finally(function() {
                // Reset button state
                button.innerHTML = '<i class="fas fa-sync-alt"></i><span>Refresh Data</span>';
                button.disabled = false;
            });
        });
    }

    // Search input for data pages
    document.getElementById('searchInput').addEventListener('input', function(e) {
        filterTable(e.target.value);
    });

    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
}

// Page Navigation
function showPage(page) {
    currentPage = page;
    
    if (page === 'home') {
        document.getElementById('homePage').classList.add('active');
        document.getElementById('dataPage').classList.remove('active');
    } else {
        document.getElementById('homePage').classList.remove('active');
        document.getElementById('dataPage').classList.add('active');
        loadTableData(page);
    }
}

function updateActiveNav(element) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

function updateActiveNavByPage(page) {
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Table Functions
function loadTableData(page) {
    const pageData = data[page];
    if (!pageData || pageData.length === 0) return;

    document.getElementById('pageTitle').textContent = titles[page];

    // Get column names from first object
    const columns = Object.keys(pageData[0]).filter(key => key !== 'id');
    
    // Build table header
    const thead = document.getElementById('tableHead');
    thead.innerHTML = '';
    const headerRow = document.createElement('tr');
    
    columns.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col.charAt(0).toUpperCase() + col.slice(1).replace(/([A-Z])/g, ' $1');
        headerRow.appendChild(th);
    });
    
    const actionTh = document.createElement('th');
    actionTh.textContent = 'Actions';
    headerRow.appendChild(actionTh);
    thead.appendChild(headerRow);

    // Build table body
    renderTableBody(pageData, columns);
}

function renderTableBody(pageData, columns) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    pageData.forEach(item => {
        const row = document.createElement('tr');
        
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = item[col];
            row.appendChild(td);
        });

        const actionTd = document.createElement('td');
        actionTd.innerHTML = `
            <div class="action-buttons-table">
                <button class="edit-btn" onclick="openEditModal(${item.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" onclick="openDeleteModal(${item.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        row.appendChild(actionTd);
        tbody.appendChild(row);
    });
}

function filterTable(searchTerm) {
    const pageData = data[currentPage];
    if (!pageData) return;

    const columns = Object.keys(pageData[0]).filter(key => key !== 'id');
    
    const filtered = pageData.filter(item => {
        return columns.some(col => {
            return String(item[col]).toLowerCase().includes(searchTerm.toLowerCase());
        });
    });

    renderTableBody(filtered, columns);
}

// Modal Functions
function openAddModal() {
    document.getElementById('addModal').classList.add('active');
}

function openEditModal(id) {
    selectedItem = id;
    document.getElementById('editModal').classList.add('active');
}

function openDeleteModal(id) {
    selectedItem = id;
    document.getElementById('deleteModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    selectedItem = null;
}

function confirmAdd() {
    const input = document.getElementById('addInput').value;
    if (input.trim()) {
        alert('Item added: ' + input);
        document.getElementById('addInput').value = '';
        closeModal('addModal');
        if (currentPage !== 'home') {
            loadTableData(currentPage);
        }
    }
}

function confirmEdit() {
    const input = document.getElementById('editInput').value;
    if (input.trim() && selectedItem) {
        alert('Item ' + selectedItem + ' edited: ' + input);
        document.getElementById('editInput').value = '';
        closeModal('editModal');
        if (currentPage !== 'home') {
            loadTableData(currentPage);
        }
    }
}

function confirmDelete() {
    if (selectedItem) {
        const pageData = data[currentPage];
        const index = pageData.findIndex(item => item.id === selectedItem);
        if (index > -1) {
            pageData.splice(index, 1);
            alert('Item ' + selectedItem + ' deleted successfully');
        }
        closeModal('deleteModal');
        if (currentPage !== 'home') {
            loadTableData(currentPage);
        }
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = '#1e3a8a';
        navMenu.style.padding = '1rem';
        navMenu.style.zIndex = '999';
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        selectedItem = null;
    }
}

// Side Panel Functions
const notificationBtn = document.querySelector('.fa-bell').parentElement;
const settingsBtn = document.querySelector('.fa-cog').parentElement;

if (notificationBtn) {
    notificationBtn.addEventListener('click', () => openPanel('notificationPanel'));
}
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => openPanel('settingsPanel'));
}

function openPanel(id) {
    closeAllPanels();
    document.getElementById(id).classList.add('active');
}

function closePanel(id) {
    document.getElementById(id).classList.remove('active');
}

function closeAllPanels() {
    document.querySelectorAll('.side-panel').forEach(panel => panel.classList.remove('active'));
}

// Settings Functionality
function saveSettings() {
    alert("Settings saved successfully!");
    closePanel('settingsPanel');
}

// Display logged-in username
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (usernameDisplay) {
        usernameDisplay.textContent = loggedInUser.username.charAt(0).toUpperCase() + loggedInUser.username.slice(1);
    }
}

// Hide admin profile for non-admin users
const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedUser && loggedUser.role !== "admin") {
    const adminProfile = document.querySelector(".admin-profile");
    if (adminProfile) {
        adminProfile.style.display = "none";
    }
}

// Toggle search bar visibility
const searchToggleBtn = document.getElementById("searchToggle");
const searchBar = document.querySelector(".search-bar");

if (searchToggleBtn && searchBar) {
    searchToggleBtn.addEventListener("click", () => {
        searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
        document.getElementById("searchInput").focus();
    });
}

console.log('Smart Urban Development System Loaded');
console.log('Total Database Records:', {
    traffic: data.traffic.length,
    parking: data.parking.length,
    parkingReservations: data.parkingReservations.length,
    wasteCategories: data.waste.length,
    wasteCollection: data.wasteCollection.length,
    recyclingPlants: data.recyclingPlants.length,
    wasteTransport: data.wasteTransport.length,
    energy: data.energy.length,
    pollution: data.pollution.length,
    emergency: data.emergency.length,
    emergencyVehicles: data.emergencyVehicles.length,
    responseTime: data.responseTime.length,
    authorities: data.authorities.length,
    administrators: data.administrators.length,
    citizens: data.citizens.length
});

// ========================================
// CHART INITIALIZATION FUNCTIONS
// ========================================

function initializeCharts() {
    initTrafficChart();
    initEnergyChart();
    initPollutionChart();
    initEmergencyChart();
    updateFeatureCounts(); // Update the feature card counts
}

// Update feature card counts with actual data
function updateFeatureCounts() {
    const countMappings = {
        'traffic': data.traffic.length,
        'parking': data.parking.length,
        'waste': data.waste.length,
        'energy': data.energy.length,
        'pollution': data.pollution.length,
        'emergency': data.emergency.length,
        'authorities': data.authorities.length,
        'administrators': data.administrators.length,
        'citizens': data.citizens.length
    };

    // Update each feature card count
    Object.keys(countMappings).forEach(table => {
        const card = document.querySelector(`.feature-card[data-page="${table}"] .feature-count`);
        if (card) {
            const count = countMappings[table];
            // Update the text based on the table type
            let unit = 'records';
            if (table === 'parking') unit = 'facilities';
            else if (table === 'waste') unit = 'categories';
            else if (table === 'energy') unit = 'zones';
            else if (table === 'pollution') unit = 'stations';
            else if (table === 'emergency') unit = 'incidents';
            else if (table === 'authorities') unit = 'authorities';
            else if (table === 'administrators') unit = 'admins';
            else if (table === 'citizens') unit = 'citizens';
            
            card.textContent = `${count} ${unit}`;
        }
    });
}

// Global chart instances to manage them
let trafficChart, energyChart, pollutionChart, emergencyChart;

// Traffic Congestion Chart
function initTrafficChart() {
    const ctx = document.getElementById('trafficChart');
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (trafficChart) {
        trafficChart.destroy();
    }

    const trafficLocations = data.traffic.map(t => t.location.substring(0, 15) + '...');
    const trafficCounts = data.traffic.map(t => t.vehicleCount);
    
    trafficChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: trafficLocations,
            datasets: [{
                label: 'Vehicle Count',
                data: trafficCounts,
                backgroundColor: [
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(251, 191, 36, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(251, 191, 36, 0.7)'
                ],
                borderColor: [
                    'rgb(239, 68, 68)',
                    'rgb(251, 191, 36)',
                    'rgb(239, 68, 68)',
                    'rgb(34, 197, 94)',
                    'rgb(251, 191, 36)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Vehicles'
                    }
                }
            }
        }
    });
}

// Energy Consumption Pie Chart
function initEnergyChart() {
    const ctx = document.getElementById('energyChart');
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (energyChart) {
        energyChart.destroy();
    }

    const energyAreas = data.energy.map(e => e.area);
    const energyValues = data.energy.map(e => parseInt(e.energyConsumed));
    
    energyChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: energyAreas,
            datasets: [{
                label: 'Energy (kWh)',
                data: energyValues,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(251, 191, 36, 0.7)',
                    'rgba(168, 85, 247, 0.7)'
                ],
                borderColor: [
                    'rgb(59, 130, 246)',
                    'rgb(239, 68, 68)',
                    'rgb(34, 197, 94)',
                    'rgb(251, 191, 36)',
                    'rgb(168, 85, 247)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Air Quality Bar Chart
function initPollutionChart() {
    const ctx = document.getElementById('pollutionChart');
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (pollutionChart) {
        pollutionChart.destroy();
    }

    const pollutionLocations = data.pollution.map(p => p.location);
    const aqiValues = data.pollution.map(p => p.aqi);
    
    pollutionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pollutionLocations,
            datasets: [{
                label: 'Air Quality Index',
                data: aqiValues,
                backgroundColor: aqiValues.map(val => {
                    if (val <= 50) return 'rgba(34, 197, 94, 0.7)';
                    if (val <= 100) return 'rgba(251, 191, 36, 0.7)';
                    if (val <= 150) return 'rgba(251, 146, 60, 0.7)';
                    return 'rgba(239, 68, 68, 0.7)';
                }),
                borderColor: aqiValues.map(val => {
                    if (val <= 50) return 'rgb(34, 197, 94)';
                    if (val <= 100) return 'rgb(251, 191, 36)';
                    if (val <= 150) return 'rgb(251, 146, 60)';
                    return 'rgb(239, 68, 68)';
                }),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'AQI Value'
                    }
                }
            }
        }
    });
}

// Emergency Response Time Chart
function initEmergencyChart() {
    const ctx = document.getElementById('emergencyChart');
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (emergencyChart) {
        emergencyChart.destroy();
    }

    const incidents = data.responseTime.map(r => r.incidentType);
    const responseTimes = data.responseTime.map(r => {
        const timeStr = r.responseTime;
        const mins = parseInt(timeStr.match(/(\d+)\s*min/)?.[1] || 0);
        const secs = parseInt(timeStr.match(/(\d+)\s*sec/)?.[1] || 0);
        return mins + (secs / 60);
    });
    
    emergencyChart = new Chart(ctx, {
        type: 'line',
