// Function to validate email format
function validateEmail(email) {
	// Regular expression for basic email validation
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validateDOB(dateString) {

	const dob = new Date(dateString); // Replace 'DOB_here' with the actual date of birth
const today = new Date();

const ageMilliseconds = today.getTime() - dob.getTime();
	const validateAge=ageMilliseconds - (18* 31560000000) // 18 years in milliseconds
	return validateAge ? true : false;



	// const monthDiff = today.getMonth() - dob.getMonth();
	// // If the user's birth month is later than today's month or their birth day hasn't occurred yet this year, subtract 1
	// if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
	// 	age;
	// }
	// return age >= 18;
}

function validateMobileNumber(number) {
	const re = /^[0-9]{10}$/; // Regular expression for 10-digit mobile number
	return re.test(number);
}

$(document).ready(function() {
	$('#registrationForm').on('submit', function(event) {
		// Prevent the form from submitting
		event.preventDefault();

		// Validation for First Name
		const firstName = $('#first').val();
		if (firstName.trim() === '') {
			$('#firstError').text('First name is required');
			return;
		} else {
			$('#firstError').text('');
		}

		// Validation for Last Name
		const lastName = $('#last').val();
		if (lastName.trim() === '') {
			$('#lastError').text('Last name is required');
			return;
		} else {
			$('#lastError').text('');
		}

		// Validation for Email
		const email = $('#email').val();
		if (email.trim() === '') {
			$('#emailError').text('Email is required');
			return;
		} else if (!validateEmail(email)) {
			$('#emailError').text('Invalid email format');
			return;
		} else {
			$('#emailError').text('');
		}

		// Add validation for other fields like DOB, Mobile Number, etc.

		 // Validation for Date of Birth
		 const dob = $('#dob').val();
		 if (!validateDOB(dob)) {
			 $('#dobError').text('You must be 18 years or older');
			 return;
		 } else {
			 $('#dobError').text('');
		 }

		 // Validation for Mobile Number
		 const mobile = $('#mobile').val();
		 if (!validateMobileNumber(mobile)) {
			 $('#mobileError').text('Mobile number must be 10 digits');
			 return;
		 } else {
			 $('#mobileError').text('');
		 }

		// If all validations pass, submit the form
		this.submit();
	});
});


$(document).bind("contextmenu",function(e){
	return false;
	  });
