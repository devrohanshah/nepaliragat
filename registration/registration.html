<!DOCTYPE html> 
<html> 
	<script type="text/javascript" 
	 src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script>
<head> 
	<title>Registration Form</title>
	<link rel="stylesheet"
		href="style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head> 

<body> 
	<div id="google_translate_element"></div>
	<div class="main"> 		
		<h1>Nepali Ragat</h1> 
		<form action="" method="POST" id="registrationForm"> 
			<label for="first">First Name:</label> 
			<input type="text" id="first"
				name="first"
				placeholder="Enter your first name" required> 
				<span id="firstError" class="error"></span>

			<label for="last">Last Name:</label> 
			<input type="text" id="last"
				name="last"
				placeholder="Enter your last name" required>
				<span id="lastError" class="error"></span> 

			<label for="email">Email:</label> 
			<input type="email" id="email"
				name="email"
				placeholder="Enter your email" required> 
				<span id="emailError" class="error"></span>

			<label for="dob">Date of Birth:</label> 
			<input type="date"
				id="dob" name="dob"
				placeholder="Enter your DOB" required> 
				<span id="dobError" class="error"></span>
			
			<label for="mobile" class="contact">Contact:</label> 
			<input type="number" id="mobile"
				name="mobile"
				placeholder="Enter your Mobile Number" required 
				maxlength="10"> 
				<span id="mobileError" class="error"></span>

			<label for="gender">Gender:</label> 
			<select id="gender" name="gender" required>
				<option value="">Select</option>
				<option value="male">Male</option> 
				<option value="female">Female</option> 
				<option value="other">Other</option> 
			</select>

			<div class="home-blood-group">
                <label for="bloodgroup">Choose a bloodgroup:</label>
                <select id="bloodgroup" name="bloodgroup" required>
									  <option value="">Select</option>
                  <option value="A+">(A+) - A RhD positive</option>
                  <option value="A-">(A-) - A RhD negative</option>
                  <option value="B+">(B+) - B RhD positive</option>
                  <option value="B-">(B-) - B RhD negative</option>
                  <option value="O+">(O+) - O RhD positive</option>
                  <option value="O-">(O-) - O RhD negative</option>
                  <option value="AB+">(AB+) - AB RhD positive</option>
                  <option value="AB-">(AB-) - AB RhD negative</option>
                </select>
              </div>

			  <div class="home-province">
                <label for="province">Choose a Province:</label>
                <select id="province" name="province" required>
                  <option value="Province No. 1">Province No. 1</option>
                  <option value="Province No. 2">Province No. 2</option>
                  <option value="Province No. 3">Province No. 3</option>
                  <option value="Gandaki">Gandaki</option>
                  <option value="Karnali">Karnali</option>
                  <option value="Province No. 5">Province No. 5</option>
                  <option value="SudurPaschim">SudurPaschim</option>
                </select>
              </div>

			  <div class="home-district">
                <label for="district">Choose a District:</label>
                <select id="district" name="district" >
                  <option value="">Choose one</option>
                </select>
              </div>

			  <div class="home-rural-municipality">
                <label for="ruralMunicipality">Choose a Municipality:</label>
                <select id="ruralMunicipality" name="ruralMunicipality" >
                  <option value="">Choose one</option>
                </select>
              </div>

			  <label for="availability">Please confirm your availability to donate blood:</label> 
			<select id="availability" name="availability" required>
				<option value="">Select</option>
				<option value="male">Available</option> 
				<option value="female">UnAvailable</option> 
			</select>

			<div class="check-box">
				<input class="box" type="checkbox" id="terms" name="terms" required>
				<label class="terms" for="terms">I authorise this website to display my name and telephone number, so that the needy could contact me, as and when there is an emergency.</label>
			</div>

			<div class="wrap"> 
				<button type="submit"> 
				Register 
				</button> 
			</div> 
		</form> 
	</div> 
	
	<script type="text/javascript">
		function googleTranslateElementInit() {
		  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
		}
	</script>
	
	<?php
// Step 1: Establish a connection to your database
$servername = "localhost"; // Change this to your database server
$username = "pma"; // Change this to your database username
$password = ""; // Change this to your database password
$dbname = "nepaliragat"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 3: Retrieve form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first = $_POST["first"];
    $last = $_POST["last"];
    $email = $_POST["email"];
    $dob = $_POST["dob"];
    $mobile = $_POST["mobile"];
    $gender = $_POST["gender"];
    $bloodgroup = $_POST["bloodgroup"];
    $province = $_POST["province"];
    $district = $_POST["district"];
    $ruralMunicipality = $_POST["ruralMunicipality"];
    $availability = $_POST["availability"];
	$terms = isset($_POST['terms']) ? true : false;
    // Additional form fields can be retrieved in a similar manner

    // Step 4: Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO nepaliragat (first, last, email, dob, mobile, gender, bloodgroup, province, district, ruralMunicipality, availability, terms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssss", $first, $last, $email, $dob, $mobile, $gender, $bloodgroup, $province, $district, $ruralMunicipality, $availability, $terms);

    // Step 5: Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Step 6: Close the statement
    $stmt->close();
}

// Step 7: Close the database connection
$conn->close();
?>


</body> 
<script src="./js/api.js"></script>
	<script src="./js/jquery.js"></script>
	<script src="./js/script.js"></script>

</html>
