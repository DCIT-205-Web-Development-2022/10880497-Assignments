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
const female = document.getElementById('female')
const male = document.getElementById('male')
const takingMeds = document.getElementById('yes')
const notTakingMeds = document.getElementById('no')
const takingMedsTextarea = document.getElementById('takingMedsTextarea')
const smallpox = document.getElementById('smallpox')
const mumps = document.getElementById('mumps')
const dizziness = document.getElementById('dizziness')
const sneezing = document.getElementById('sneezing')

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

    // Validate Gender
    if (female.checked === false && male.checked === false) {
        alert("Please select at least one gender")
    }

    // variables to display gender
    let checkGender = null

    if (female.checked === true) {
        checkGender = "Female"
    } else if (male.checked === true) {
        checkGender = "Male"
    }

    // Validate Nationality
    
    
    // Validate Medical History
    if (smallpox.checked === false && mumps.checked === false && dizziness.checked === false && sneezing.checked === false) {
        alert('Please select at least one medical history')
        return false
    } 

    // variables to display user inputs for medical history
    let smallpoxChecked = null
    let mumpsChecked = null
    let dizzinessChecked = null
    let sneezingChecked = null

    if (smallpox.checked === true) {
        smallpoxChecked = "Smallpox"
    }
    if (mumps.checked === true) {
        mumpsChecked = "Mumps"
    }
    if (dizziness.checked === true) {
        dizzinessChecked = "Dizziness"
    }
    if (sneezing.checked === true) {
        sneezingChecked = "Sneezing"
    }

    // medical history array
    const medicalHistoryArray = [smallpoxChecked, mumpsChecked, dizzinessChecked, sneezingChecked]
    let medicalHistory = ""

    for (let i = 0; i <= medicalHistoryArray.length; i++) {
        if (medicalHistoryArray[i] !== undefined && medicalHistoryArray[i] !== null) {
            medicalHistory = medicalHistory + " " + medicalHistoryArray[i]
        }
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
        `First Name: ${firstnameValue}\n
        Last Name: ${lastnameValue}\n
        Gender: ${checkGender}\n
        Address: ${addressValue}\n
        Medical History: ${medicalHistory}\n
        Current Medication: ${takingMedsValue || "None"}\n`
	)
}
