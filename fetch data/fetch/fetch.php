<?php
// Define database connection details
$servername = "localhost";
$username = "pma";
$password = "";
$dbname = "nepaliragat";

// Create a new database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for errors when connecting to the database
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the received data
$data = json_decode(file_get_contents('php://input'), true);

// Fetch data based on form input
$bloodgroup = isset($data['bloodgroup']) ? $data['bloodgroup'] : '';
$province = isset($data['province']) ? $data['province'] : '';
$district = isset($data['district']) ? $data['district'] : '';
$ruralMunicipality = isset($data['ruralMunicipality']) ? $data['ruralMunicipality'] : '';

// Build the SQL query
$sql = "SELECT * FROM nepaliragat WHERE 1=1";

// Add conditions based on the received data
if (!empty($province)) {
    $sql .= " AND province = '" . $province . "'";
}

if (!empty($district)) {
    $sql .= " AND district = '" . $district . "'";
}

if (!empty($ruralMunicipality)) {
    $sql .= " AND ruralmunicipality = '" . $ruralMunicipality . "'";
}

// Execute the SQL query
$result = $conn->query($sql);

// Prepare the data
$data = [];

// Iterate through the result set and build data array
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Close the database connection
$conn->close();

// Output the data in JSON format
header('Content-Type: application/json');
echo json_encode($data);
?>