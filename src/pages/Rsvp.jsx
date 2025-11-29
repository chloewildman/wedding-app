import React, { useState, useEffect } from "react";

function Rsvp() {
    const [hasAllergies, setHasAllergies] = useState(null);

    useEffect(() => {
        const rsvpForm = document.forms.rsvpForm;
        rsvpForm.addEventListener('submit', validateEntries);

        function validateEntries(e) {
            e.preventDefault();
            const successMessage = document.getElementById('successMessage');
            const firstName = rsvpForm.firstName.value;
            const lastName = rsvpForm.lastName.value;
            const email = rsvpForm.email.value;
            const attendance = rsvpForm.attendance.value;
            const onLoc = rsvpForm.onLoc.value;
            const allergies = rsvpForm.allergies.value;
            const allergyExp = rsvpForm.allergyExp?.value || '';
            const items = document.querySelectorAll('input[name="items"]');
            const atLeastOneItem = Array.from(items).some(checkbox => checkbox.checked);

            const firstNameError = document.getElementById("firstNameError");
            const lastNameError = document.getElementById("lastNameError");
            const emailError = document.getElementById("emailError");
            const attendanceError = document.getElementById("attendanceError");
            const onLocError = document.getElementById("onLocError");
            const allergyYNError = document.getElementById("allergyYNError");
            const allergyExpError = document.getElementById("allergyExpError");
            const itemsError = document.getElementById("itemsError");

            // Reset error messages 
            [firstNameError, lastNameError, emailError, attendanceError, onLocError, allergyYNError, itemsError].forEach(error => error.textContent = '');

            // Hide success class to avoid empty box on page
            successMessage.classList.remove('success');
            successMessage.style.display = 'none';

            // Regex 
            const nameRegex = /[A-Za-z]{2,}/;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Client-side validation
            let isValid = true;

            // Validation function
            const validateEntry = (runTest, value, errorName, errorMessage) => {
                if (!runTest(value)) {
                    errorName.textContent = errorMessage;
                    isValid = false;
                }
            }

            // Validation checks
            validateEntry(entry => nameRegex.test(entry), firstName, firstNameError, "*First name must contain at least 2 characters.");
            validateEntry(entry => nameRegex.test(entry), lastName, lastNameError, "*Last name must contain at least 2 characters.");
            validateEntry(entry => emailRegex.test(entry), email, emailError, "*Please enter a valid email.");
            validateEntry(entry => entry !== '', attendance, attendanceError, "*Please let us know if you will be attending.");
            validateEntry(entry => entry !== '', onLoc, onLocError, "*Please let us know if you will be staying at the home with us.");
            validateEntry(entry => entry !== '', allergies, allergyYNError, "*Please let us know if you have any allergies.");
            validateEntry(entry => entry === true, atLeastOneItem, itemsError, "*Please select at least one item.");

            if (isValid) {
                document.getElementById('formContainer').style.display = 'none';
                const successMessage = document.getElementById('successMessage');
                successMessage.innerHTML = `Thank you, ${firstName} ${lastName}!<br>We received your RSVP.`;
                successMessage.classList.add('success');
                successMessage.style.display = 'block';
            }
        }
    })

    return (
        <div className="rsvpPage">
            <div className="generalInfo">
                <div id="formContainer" className="formContainer">
                    <form id="rsvpForm">
                        <fieldset>
                            <legend>
                                Contact information
                            </legend>
                            <div className="field">
                                <label htmlFor="firstName" className="contactLabel">First name:</label>
                                <input type="text" name="firstName" id="firstName"></input>
                                <span className="error" id="firstNameError"></span>
                            </div>
                            <div className="field">
                                <label htmlFor="lastName" className="contactLabel">Last name:</label>
                                <input type="text" name="lastName" id="lastName"></input>
                                <span className="error" id="lastNameError"></span>
                            </div>
                            <div className="field">
                                <label htmlFor="email" className="contactLabel">Email:</label>
                                <input type="email" name="email" id="email"></input>
                                <span className="error" id="emailError"></span>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Will you be able to attend?
                            </legend>
                            <input type="radio" name="attendance" id="attendYes" value="1"></input><label htmlFor="attendYes">Yes, I will be able to attend!</label><br></br>
                            <input type="radio" name="attendance" id="attendNo" value="0"></input><label htmlFor="attendNo">No, I cannot attend.</label>
                            <span className="error" id="attendanceError"></span>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Will you be staying with us on location?
                            </legend>
                            <input type="radio" name="onLoc" id="onLocYes" value="1"></input><label htmlFor="onLocYes">Yes, I will be staying on location.</label><br></br>
                            <input type="radio" name="onLoc" id="onLocNo" value="0"></input><label htmlFor="onLocNo">No, I will be staying elsewhere.</label>
                            <span className="error" id="onLocError"></span>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Do you have any food allergies?
                            </legend>
                            <input type="radio" name="allergies" id="allergiesYes" value="1" onChange={() => setHasAllergies(true)}
                            ></input><label htmlFor="allergiesYes">Yes</label><br></br>
                            <input type="radio" name="allergies" id="allergiesNo" value="0" onChange={() => setHasAllergies(false)}
                            ></input><label htmlFor="allergiesNo">No</label>
                            <span className="error" id="allergyYNError"></span>
                        </fieldset>
                        {hasAllergies && (
                            <fieldset id="allergyExpField">
                                <legend>What food allergies?</legend>
                                <input type="text" name="allergyExp" id="allergyExp" />
                                <span className="error" id="allergyExpError"></span>
                            </fieldset>
                        )}
                        <fieldset>
                            <legend>
                                Please check off any items that you can bring.
                            </legend>
                            <input type="checkbox" name="items" id="water" value="subscribe"></input><label htmlFor="water">Water</label><br></br>
                            <input type="checkbox" name="items" id="beer" value="subscribe"></input><label htmlFor="beer">Beer</label><br></br>
                            <input type="checkbox" name="items" id="wine" value="subscribe"></input><label htmlFor="wine">Wine</label><br></br>
                            <input type="checkbox" name="items" id="liquor" value="subscribe"></input><label htmlFor="liquor">Liquor</label><br></br>
                            <input type="checkbox" name="items" id="dessert" value="subscribe"></input><label htmlFor="dessert">Dessert</label>
                            <span className="error" id="itemsError"></span>
                        </fieldset>
                        <button className="formSubmit" type="submit">RSVP!</button>
                    </form>
                </div>
                <div id="successMessage"></div>
            </div>
        </div>
    )
}

export default Rsvp;