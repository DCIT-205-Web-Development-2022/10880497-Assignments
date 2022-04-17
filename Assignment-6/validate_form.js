// This file validates the HTML form it is linked to

// Create an HTML form similar to the one attached to this assignment and use JavaScript to validate user inputs for the HTML form
//         (Do not bother about design). Create a JavaScript file to do the validation and call it validate_form.js file.
//         Submit both HTML and JavaScript file.

//         The validation should satisfy the following rules at least:

//             No empty input. All form elements should have an input.
//             Exception for rule one: If you choose "No" for "Current Medication", the textarea for "Current Medication" must be empty.
//             Otherwise, there should be an input to indicate the details, i.e., if you choose "Yes", the textarea should not be empty.
//             Maximum input characters of "First name" or "Last name" are 50 characters.
//             Maximum input characters of "Address" are 300 characters.
//             For correct user inputs, show the user inputs in an alert window. Otherwise, warn the user in an alert window.

// Variables
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const address = document.getElementById('address')
const takingMeds = document.getElementById('yes')
const notTakingMeds = document.getElementById('no')
const takingMedsTextarea = document.getElementById('takingMedsTextarea')

// Event Listeners
form.addEventListener('submit', (e) => {
	e.preventDefault()
	validateForm()
})

const validateForm = () => {
	const firstnameValue = firstname.value.trim()
	const lastnameValue = lastname.value.trim()
	const addressValue = address.value.trim()
	const takingMedsValue = takingMedsTextarea.value.trim()

	// Validate First Name
	if (firstnameValue === '') {
		alert('First Name cannot be empty')
		return false
	} else if (firstnameValue.length > 50) {
		alert('First Name cannot be more than 50 characters')
		return false
	}

	// Validate Last Name
	if (lastnameValue === '') {
		alert('Last Name cannot be empty')
		return false
	} else if (lastnameValue.length > 50) {
		alert('Last Name cannot be more than 50 characters')
		return false
	}

	// Validate Address
	if (addressValue === '') {
		alert('Address cannot be empty')
		return false
	} else if (addressValue.length > 300) {
		alert('Address cannot be more than 300 characters')
		return false
	}

	// Validate Current Medication
	if (!notTakingMeds.checked && !takingMeds.checked) {
		// If user chooses neither "Yes" nor "No" for "Current Medication"
		alert('Please choose whether you are currently taking any medication')
		return false
	} else if (takingMeds.checked && takingMedsValue === '') {
		// If user chooses "Yes" for "Current Medication" and the textarea for "Current Medication" is empty
		alert('Please enter the details of your current medication')
		return false
	}

	// Show user inputs
	alert(
		`First Name: ${firstnameValue}\nLast Name: ${lastnameValue}\nAddress: ${addressValue}`
	)
}
