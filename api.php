<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Database configuration
class Database {
    private $host = "127.0.0.1";
    private $db_name = "smart-urban-development";
    private $username = "root";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("set names utf8");
        } catch(PDOException $e) {
            echo json_encode([
                'success' => false,
                'message' => 'Connection Error: ' . $e->getMessage()
            ]);
        }
        return $this->conn;
    }
}

// Main API Handler
$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_GET['action']) ? $_GET['action'] : '';
$table = isset($_GET['table']) ? $_GET['table'] : '';
$id = isset($_GET['id']) ? $_GET['id'] : '';

// Handle different HTTP methods
switch($method) {
    case 'GET':
        handleGet($db, $action, $table, $id);
        break;
    case 'POST':
        handlePost($db, $action, $table);
        break;
    case 'PUT':
        handlePut($db, $table, $id);
        break;
    case 'DELETE':
        handleDelete($db, $table, $id);
        break;
    default:
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}

// GET Handler
function handleGet($db, $action, $table, $id) {
    if ($action === 'all') {
        getAllData($db);
    } elseif ($table && $id) {
        getSingleRecord($db, $table, $id);
    } elseif ($table) {
        getTableData($db, $table);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid parameters']);
    }
}

// Get all data from all tables
function getAllData($db) {
    $tables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    $data = [];
    
    foreach ($tables as $table) {
        $query = "SELECT * FROM " . $table;
        $stmt = $db->prepare($query);
        $stmt->execute();
        $data[$table] = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    echo json_encode([
        'success' => true,
        'data' => $data
    ]);
}

// Get data from specific table
function getTableData($db, $table) {
    $allowedTables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    
    if (!in_array($table, $allowedTables)) {
        echo json_encode(['success' => false, 'message' => 'Invalid table']);
        return;
    }
    
    $query = "SELECT * FROM " . $table;
    $stmt = $db->prepare($query);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'data' => $data,
        'count' => count($data)
    ]);
}

// Get single record
function getSingleRecord($db, $table, $id) {
    $allowedTables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    
    if (!in_array($table, $allowedTables)) {
        echo json_encode(['success' => false, 'message' => 'Invalid table']);
        return;
    }
    
    $query = "SELECT * FROM " . $table . " WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($data) {
        echo json_encode(['success' => true, 'data' => $data]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Record not found']);
    }
}

// POST Handler - Create new record
function handlePost($db, $action, $table) {
    $allowedTables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    
    if (!in_array($table, $allowedTables)) {
        echo json_encode(['success' => false, 'message' => 'Invalid table']);
        return;
    }
    
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!$data) {
        echo json_encode(['success' => false, 'message' => 'Invalid data']);
        return;
    }
    
    // Remove id if present (auto-increment)
    unset($data['id']);
    
    $columns = array_keys($data);
    $values = array_values($data);
    $placeholders = array_fill(0, count($columns), '?');
    
    $query = "INSERT INTO " . $table . " (" . implode(', ', $columns) . ") VALUES (" . implode(', ', $placeholders) . ")";
    
    try {
        $stmt = $db->prepare($query);
        $stmt->execute($values);
        
        echo json_encode([
            'success' => true,
            'message' => 'Record added successfully',
            'id' => $db->lastInsertId()
        ]);
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        ]);
    }
}

// PUT Handler - Update record
function handlePut($db, $table, $id) {
    $allowedTables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    
    if (!in_array($table, $allowedTables)) {
        echo json_encode(['success' => false, 'message' => 'Invalid table']);
        return;
    }
    
    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID required']);
        return;
    }
    
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!$data) {
        echo json_encode(['success' => false, 'message' => 'Invalid data']);
        return;
    }
    
    // Remove id from update data
    unset($data['id']);
    
    $setParts = [];
    $values = [];
    
    foreach ($data as $key => $value) {
        $setParts[] = "$key = ?";
        $values[] = $value;
    }
    
    $values[] = $id;
    
    $query = "UPDATE " . $table . " SET " . implode(', ', $setParts) . " WHERE id = ?";
    
    try {
        $stmt = $db->prepare($query);
        $stmt->execute($values);
        
        echo json_encode([
            'success' => true,
            'message' => 'Record updated successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        ]);
    }
}

// DELETE Handler
function handleDelete($db, $table, $id) {
    $allowedTables = ['traffic', 'parking', 'waste', 'energy', 'pollution', 'emergency', 'authorities', 'administrators', 'citizens'];
    
    if (!in_array($table, $allowedTables)) {
        echo json_encode(['success' => false, 'message' => 'Invalid table']);
        return;
    }
    
    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID required']);
        return;
    }
    
    $query = "DELETE FROM " . $table . " WHERE id = :id";
    
    try {
        $stmt = $db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                'success' => true,
                'message' => 'Record deleted successfully'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Record not found'
            ]);
        }
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        ]);
    }
}
?>