// ========================================
// SMART URBAN DEVELOPMENT PROJECT - COMPLETE DATABASE
// ========================================

// Feature 1: Smart City Traffic Management
const data = {
    traffic: [
        { 
            id: 1, 
            location: 'Main Street & 5th Avenue', 
            vehicleCount: 245, 
            congestionLevel: 'High', 
            accidents: 2, 
            timestamp: '2025-11-03 08:30:00',
            weatherCondition: 'Clear',
            speedAvg: '15 km/h'
        },
        { 
            id: 2, 
            location: 'Highway 101 Exit 12', 
            vehicleCount: 180, 
            congestionLevel: 'Medium', 
            accidents: 0, 
            timestamp: '2025-11-03 09:15:00',
            weatherCondition: 'Rainy',
            speedAvg: '35 km/h'
        },
        { 
            id: 3, 
            location: 'Central Business District', 
            vehicleCount: 320, 
            congestionLevel: 'High', 
            accidents: 1, 
            timestamp: '2025-11-03 08:45:00',
            weatherCondition: 'Clear',
            speedAvg: '12 km/h'
        },
        { 
            id: 4, 
            location: 'Airport Road Junction', 
            vehicleCount: 95, 
            congestionLevel: 'Low', 
            accidents: 0, 
            timestamp: '2025-11-03 10:00:00',
            weatherCondition: 'Foggy',
            speedAvg: '55 km/h'
        },
        { 
            id: 5, 
            location: 'Industrial Zone Route 7', 
            vehicleCount: 150, 
            congestionLevel: 'Medium', 
            accidents: 1, 
            timestamp: '2025-11-03 07:30:00',
            weatherCondition: 'Clear',
            speedAvg: '40 km/h'
        }
    ],

    // Feature 2: Smart Parking System
    parking: [
        { 
            id: 1, 
            location: 'City Center Mall Parking', 
            totalSpots: 200, 
            availableSpots: 45, 
            occupiedSpots: 155,
            parkingType: 'Multi-level',
            hourlyRate: '$3.00',
            status: 'Active'
        },
        { 
            id: 2, 
            location: 'Downtown Plaza', 
            totalSpots: 150, 
            availableSpots: 89, 
            occupiedSpots: 61,
            parkingType: 'Surface',
            hourlyRate: '$2.50',
            status: 'Active'
        },
        { 
            id: 3, 
            location: 'Railway Station Parking', 
            totalSpots: 300, 
            availableSpots: 12, 
            occupiedSpots: 288,
            parkingType: 'Multi-level',
            hourlyRate: '$4.00',
            status: 'Active'
        },
        { 
            id: 4, 
            location: 'Hospital Complex', 
            totalSpots: 180, 
            availableSpots: 67, 
            occupiedSpots: 113,
            parkingType: 'Surface',
            hourlyRate: '$2.00',
            status: 'Active'
        },
        { 
            id: 5, 
            location: 'Sports Stadium', 
            totalSpots: 500, 
            availableSpots: 445, 
            occupiedSpots: 55,
            parkingType: 'Open Ground',
            hourlyRate: '$5.00',
            status: 'Active'
        }
    ],

    parkingReservations: [
        { 
            id: 1, 
            userName: 'John Smith', 
            parkingLocation: 'City Center Mall Parking', 
            spotNumber: 'A-45', 
            reservationDate: '2025-11-03',
            timeSlot: '10:00 AM - 12:00 PM',
            paymentStatus: 'Paid',
            amount: '$6.00'
        },
        { 
            id: 2, 
            userName: 'Sarah Johnson', 
            parkingLocation: 'Railway Station Parking', 
            spotNumber: 'B-102', 
            reservationDate: '2025-11-03',
            timeSlot: '08:00 AM - 06:00 PM',
            paymentStatus: 'Paid',
            amount: '$40.00'
        },
        { 
            id: 3, 
            userName: 'Mike Chen', 
            parkingLocation: 'Downtown Plaza', 
            spotNumber: 'C-23', 
            reservationDate: '2025-11-03',
            timeSlot: '02:00 PM - 05:00 PM',
            paymentStatus: 'Pending',
            amount: '$7.50'
        },
        { 
            id: 4, 
            userName: 'Emily Davis', 
            parkingLocation: 'Hospital Complex', 
            spotNumber: 'D-78', 
            reservationDate: '2025-11-04',
            timeSlot: '09:00 AM - 11:00 AM',
            paymentStatus: 'Paid',
            amount: '$4.00'
        }
    ],

    // Feature 3: Waste Management & Recycling Tracking
    waste: [
        { 
            id: 1, 
            wasteCategory: 'Organic', 
            description: 'Food waste, garden waste', 
            recyclingRate: '75%',
            colorCode: 'Green',
            disposalMethod: 'Composting'
        },
        { 
            id: 2, 
            wasteCategory: 'Plastic', 
            description: 'Bottles, containers, packaging', 
            recyclingRate: '60%',
            colorCode: 'Blue',
            disposalMethod: 'Recycling Plant'
        },
        { 
            id: 3, 
            wasteCategory: 'Electronic', 
            description: 'Old devices, batteries, cables', 
            recyclingRate: '45%',
            colorCode: 'Red',
            disposalMethod: 'E-waste Facility'
        },
        { 
            id: 4, 
            wasteCategory: 'Paper', 
            description: 'Newspapers, cardboard, office paper', 
            recyclingRate: '80%',
            colorCode: 'Yellow',
            disposalMethod: 'Paper Mill'
        },
        { 
            id: 5, 
            wasteCategory: 'Metal', 
            description: 'Cans, scrap metal', 
            recyclingRate: '70%',
            colorCode: 'Gray',
            disposalMethod: 'Metal Recycling'
        }
    ],

    wasteCollection: [
        { 
            id: 1, 
            zone: 'Residential Area A', 
            wasteType: 'Organic', 
            collectedAmount: '1200 kg', 
            collectionDate: '2025-11-03',
            status: 'Completed',
            vehicleID: 'WM-001',
            crew: '4 workers'
        },
        { 
            id: 2, 
            zone: 'Commercial District B', 
            wasteType: 'Plastic', 
            collectedAmount: '800 kg', 
            collectionDate: '2025-11-03',
            status: 'In Transit',
            vehicleID: 'WM-003',
            crew: '3 workers'
        },
        { 
            id: 3, 
            zone: 'Industrial Zone C', 
            wasteType: 'Electronic', 
            collectedAmount: '350 kg', 
            collectionDate: '2025-11-02',
            status: 'Pending',
            vehicleID: 'WM-005',
            crew: '5 workers'
        },
        { 
            id: 4, 
            zone: 'Downtown Area', 
            wasteType: 'Paper', 
            collectedAmount: '950 kg', 
            collectionDate: '2025-11-03',
            status: 'Completed',
            vehicleID: 'WM-002',
            crew: '3 workers'
        },
        { 
            id: 5, 
            zone: 'Suburban Area D', 
            wasteType: 'Metal', 
            collectedAmount: '450 kg', 
            collectionDate: '2025-11-03',
            status: 'In Transit',
            vehicleID: 'WM-004',
            crew: '4 workers'
        }
    ],

    recyclingPlants: [
        { 
            id: 1, 
            plantName: 'Green Valley Composting', 
            location: 'North District', 
            capacity: '5000 kg/day',
            wasteTypeAccepted: 'Organic',
            operationalStatus: 'Active',
            efficiency: '92%'
        },
        { 
            id: 2, 
            plantName: 'Blue Ocean Plastic Recycling', 
            location: 'East Industrial Zone', 
            capacity: '8000 kg/day',
            wasteTypeAccepted: 'Plastic',
            operationalStatus: 'Active',
            efficiency: '88%'
        },
        { 
            id: 3, 
            plantName: 'Tech Waste Solutions', 
            location: 'South Tech Park', 
            capacity: '2000 kg/day',
            wasteTypeAccepted: 'Electronic',
            operationalStatus: 'Active',
            efficiency: '85%'
        },
        { 
            id: 4, 
            plantName: 'Paper Plus Recycling', 
            location: 'West Commercial Area', 
            capacity: '10000 kg/day',
            wasteTypeAccepted: 'Paper',
            operationalStatus: 'Active',
            efficiency: '95%'
        }
    ],

    wasteTransport: [
        { 
            id: 1, 
            vehicleID: 'WM-001', 
            vehicleType: 'Compactor Truck', 
            route: 'Route A - Residential',
            capacity: '15 tons',
            fuelType: 'Diesel',
            status: 'On Route',
            driver: 'Ahmed Khan'
        },
        { 
            id: 2, 
            vehicleID: 'WM-002', 
            vehicleType: 'Garbage Truck', 
            route: 'Route B - Downtown',
            capacity: '12 tons',
            fuelType: 'CNG',
            status: 'Available',
            driver: 'Maria Lopez'
        },
        { 
            id: 3, 
            vehicleID: 'WM-003', 
            vehicleType: 'Recycling Truck', 
            route: 'Route C - Commercial',
            capacity: '10 tons',
            fuelType: 'Electric',
            status: 'In Transit',
            driver: 'Robert Wilson'
        },
        { 
            id: 4, 
            vehicleID: 'WM-004', 
            vehicleType: 'Compactor Truck', 
            route: 'Route D - Suburban',
            capacity: '15 tons',
            fuelType: 'Diesel',
            status: 'Maintenance',
            driver: 'Li Wei'
        },
        { 
            id: 5, 
            vehicleID: 'WM-005', 
            vehicleType: 'E-waste Van', 
            route: 'Route E - Industrial',
            capacity: '5 tons',
            fuelType: 'Hybrid',
            status: 'Available',
            driver: 'Sarah Ahmed'
        }
    ],

    // Feature 4: Smart Energy Monitoring System
    energy: [
        { 
            id: 1, 
            area: 'Residential Zone A', 
            energyConsumed: '1500 kWh', 
            waterUsage: '450 L',
            gasUsage: '120 m³',
            date: '2025-11-03',
            status: 'Normal',
            cost: '$180.00',
            peakHours: '06:00 PM - 10:00 PM'
        },
        { 
            id: 2, 
            area: 'Industrial Zone B', 
            energyConsumed: '4200 kWh', 
            waterUsage: '1200 L',
            gasUsage: '350 m³',
            date: '2025-11-03',
            status: 'High',
            cost: '$520.00',
            peakHours: '08:00 AM - 06:00 PM'
        },
        { 
            id: 3, 
            area: 'Commercial Zone C', 
            energyConsumed: '2800 kWh', 
            waterUsage: '800 L',
            gasUsage: '200 m³',
            date: '2025-11-03',
            status: 'Normal',
            cost: '$340.00',
            peakHours: '10:00 AM - 08:00 PM'
        },
        { 
            id: 4, 
            area: 'Hospital Complex', 
            energyConsumed: '3500 kWh', 
            waterUsage: '1500 L',
            gasUsage: '280 m³',
            date: '2025-11-03',
            status: 'Critical',
            cost: '$450.00',
            peakHours: '24/7'
        },
        { 
            id: 5, 
            area: 'Educational Institute', 
            energyConsumed: '1800 kWh', 
            waterUsage: '600 L',
            gasUsage: '150 m³',
            date: '2025-11-03',
            status: 'Normal',
            cost: '$220.00',
            peakHours: '08:00 AM - 04:00 PM'
        }
    ],

    // Feature 5: Air Quality & Pollution Monitoring
    pollution: [
        { 
            id: 1, 
            location: 'Downtown Center', 
            aqi: 145, 
            pm25: '65 µg/m³',
            co2Level: '420 ppm',
            noiseLevel: '75 dB',
            status: 'Moderate',
            timestamp: '2025-11-03 09:00:00',
            alertLevel: 'Yellow'
        },
        { 
            id: 2, 
            location: 'Industrial Area', 
            aqi: 198, 
            pm25: '95 µg/m³',
            co2Level: '580 ppm',
            noiseLevel: '85 dB',
            status: 'Unhealthy',
            timestamp: '2025-11-03 09:00:00',
            alertLevel: 'Orange'
        },
        { 
            id: 3, 
            location: 'Suburban Park', 
            aqi: 78, 
            pm25: '32 µg/m³',
            co2Level: '380 ppm',
            noiseLevel: '45 dB',
            status: 'Good',
            timestamp: '2025-11-03 09:00:00',
            alertLevel: 'Green'
        },
        { 
            id: 4, 
            location: 'Highway Corridor', 
            aqi: 165, 
            pm25: '78 µg/m³',
            co2Level: '495 ppm',
            noiseLevel: '80 dB',
            status: 'Unhealthy for Sensitive',
            timestamp: '2025-11-03 09:00:00',
            alertLevel: 'Yellow'
        },
        { 
            id: 5, 
            location: 'Coastal Area', 
            aqi: 55, 
            pm25: '18 µg/m³',
            co2Level: '360 ppm',
            noiseLevel: '40 dB',
            status: 'Excellent',
            timestamp: '2025-11-03 09:00:00',
            alertLevel: 'Green'
        }
    ],

    // Feature 6: Emergency Response & Public Safety System
    emergency: [
        { 
            id: 1, 
            type: 'Fire', 
            location: 'Building A, 23rd Street', 
            reportedBy: 'Citizen Alert',
            status: 'In Progress', 
            priority: 'High',
            timestamp: '2025-11-03 08:45:00',
            assignedUnit: 'Fire Squad 3',
            casualties: '0'
        },
        { 
            id: 2, 
            type: 'Road Accident', 
            location: 'Highway 101, Mile 45', 
            reportedBy: 'Traffic Camera',
            status: 'Resolved', 
            priority: 'Medium',
            timestamp: '2025-11-03 07:30:00',
            assignedUnit: 'Ambulance 7',
            casualties: '2 injured'
        },
        { 
            id: 3, 
            type: 'Medical Emergency', 
            location: 'Park Street Residence', 
            reportedBy: '911 Call',
            status: 'Dispatched', 
            priority: 'High',
            timestamp: '2025-11-03 09:15:00',
            assignedUnit: 'Ambulance 3',
            casualties: '1 critical'
        },
        { 
            id: 4, 
            type: 'Flood Warning', 
            location: 'River Bank Area', 
            reportedBy: 'Weather Station',
            status: 'Monitoring', 
            priority: 'Medium',
            timestamp: '2025-11-03 06:00:00',
            assignedUnit: 'Disaster Team 2',
            casualties: '0'
        },
        { 
            id: 5, 
            type: 'Power Outage', 
            location: 'West District', 
            reportedBy: 'Utility Monitor',
            status: 'Under Repair', 
            priority: 'Low',
            timestamp: '2025-11-03 05:30:00',
            assignedUnit: 'Electric Crew 5',
            casualties: '0'
        }
    ],

    emergencyVehicles: [
        { 
            id: 1, 
            vehicleID: 'AMB-003', 
            vehicleType: 'Ambulance', 
            currentLocation: 'Station 3',
            status: 'On Duty',
            assignedTo: 'Medical Emergency #3',
            crew: 'Dr. Ahmed, Paramedic John',
            fuelLevel: '85%'
        },
        { 
            id: 2, 
            vehicleID: 'FIRE-003', 
            vehicleType: 'Fire Engine', 
            currentLocation: '23rd Street',
            status: 'Responding',
            assignedTo: 'Fire Incident #1',
            crew: 'Captain Smith, 6 firefighters',
            fuelLevel: '92%'
        },
        { 
            id: 3, 
            vehicleID: 'POL-012', 
            vehicleType: 'Police Car', 
            currentLocation: 'Patrol Route 5',
            status: 'Patrolling',
            assignedTo: 'General Patrol',
            crew: 'Officer Martinez, Officer Lee',
            fuelLevel: '70%'
        },
        { 
            id: 4, 
            vehicleID: 'AMB-007', 
            vehicleType: 'Ambulance', 
            currentLocation: 'Highway 101',
            status: 'Available',
            assignedTo: 'None',
            crew: 'Paramedic Sarah, Driver Tom',
            fuelLevel: '78%'
        },
        { 
            id: 5, 
            vehicleID: 'RES-002', 
            vehicleType: 'Rescue Van', 
            currentLocation: 'Station 1',
            status: 'Standby',
            assignedTo: 'None',
            crew: 'Rescue Team Alpha',
            fuelLevel: '100%'
        }
    ],

    responseTime: [
        { 
            id: 1, 
            incidentID: 'INC-001', 
            incidentType: 'Fire',
            dispatchTime: '08:45:30',
            arrivalTime: '08:52:15',
            responseTime: '6 min 45 sec',
            resolution: 'Ongoing',
            performance: 'Good'
        },
        { 
            id: 2, 
            incidentID: 'INC-002', 
            incidentType: 'Road Accident',
            dispatchTime: '07:30:20',
            arrivalTime: '07:38:50',
            responseTime: '8 min 30 sec',
            resolution: 'Completed',
            performance: 'Excellent'
        },
        { 
            id: 3, 
            incidentID: 'INC-003', 
            incidentType: 'Medical Emergency',
            dispatchTime: '09:15:10',
            arrivalTime: '09:20:35',
            responseTime: '5 min 25 sec',
            resolution: 'In Progress',
            performance: 'Excellent'
        },
        { 
            id: 4, 
            incidentID: 'INC-004', 
            incidentType: 'Flood Warning',
            dispatchTime: '06:00:00',
            arrivalTime: '06:25:00',
            responseTime: '25 min',
            resolution: 'Monitoring',
            performance: 'Satisfactory'
        },
        { 
            id: 5, 
            incidentID: 'INC-005', 
            incidentType: 'Power Outage',
            dispatchTime: '05:30:45',
            arrivalTime: '06:15:20',
            responseTime: '44 min 35 sec',
            resolution: 'Under Repair',
            performance: 'Needs Improvement'
        }
    ]
};

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
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showPage('home');
});

// Event Listeners
function setupEventListeners() {
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
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
}

// Traffic Congestion Chart
function initTrafficChart() {
    const ctx = document.getElementById('trafficChart');
    if (!ctx) return;

    const trafficLocations = data.traffic.map(t => t.location.substring(0, 15) + '...');
    const trafficCounts = data.traffic.map(t => t.vehicleCount);
    
    new Chart(ctx, {
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

    const energyAreas = data.energy.map(e => e.area);
    const energyValues = data.energy.map(e => parseInt(e.energyConsumed));
    
    new Chart(ctx, {
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

    const pollutionLocations = data.pollution.map(p => p.location);
    const aqiValues = data.pollution.map(p => p.aqi);
    
    new Chart(ctx, {
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

    const incidents = data.responseTime.map(r => r.incidentType);
    const responseTimes = data.responseTime.map(r => {
        const timeStr = r.responseTime;
        const mins = parseInt(timeStr.match(/(\d+)\s*min/)?.[1] || 0);
        const secs = parseInt(timeStr.match(/(\d+)\s*sec/)?.[1] || 0);
        return mins + (secs / 60);
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: incidents,
            datasets: [{
                label: 'Response Time (minutes)',
                data: responseTimes,
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                borderColor: 'rgb(139, 92, 246)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgb(139, 92, 246)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Minutes'
                    }
                }
            }
        }
    });
}
// Set high DPI rendering for better graph quality
Chart.defaults.devicePixelRatio = 2; // default is 1; 2 gives crisp lines on HD screens
const trafficChart = new Chart(document.getElementById("trafficChart"), {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Traffic Flow',
            data: [30, 45, 35, 50, 40, 55],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderWidth: 2,
            tension: 0.4 // <--- smooth curved lines
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, labels: { font: { size: 14 } } }
        },
        scales: {
            x: { ticks: { font: { size: 13 } } },
            y: { ticks: { font: { size: 13 } } }
        }
    }
});
