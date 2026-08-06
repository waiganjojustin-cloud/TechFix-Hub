// Get the repair form from the HTML
const repairForm = document.getElementById("repairForm");

// Get the payment method dropdown
const paymentMethod = document.getElementById("paymentMethod");

// Get the M-Pesa phone number section
const mpesaSection = document.getElementById("mpesaSection");

// Check if the payment method dropdown exists
if (paymentMethod) {

    // Listen for changes in the payment method
    paymentMethod.addEventListener("change", function () {

        // If the user selects M-Pesa
        if (paymentMethod.value === "M-Pesa") {

            // Show the M-Pesa phone number input
            mpesaSection.style.display = "block";

        } else {

            // Hide the M-Pesa section for other payment methods
            mpesaSection.style.display = "none";

            // Clear any previously entered phone number
            document.getElementById("paymentNumber").value = "";

        }

    });

}

// Listen for the form submission
repairForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get all user input values from the form
    const customerName = document.getElementById("customerName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const deviceType = document.getElementById("deviceType").value;
    const problem = document.getElementById("problem").value.trim();
    const status = document.getElementById("status").value;
    const payment = paymentMethod.value;
    const paymentNumber = document.getElementById("paymentNumber").value.trim();

    // Check if all required fields have been filled
    if (
        customerName === "" ||
        phoneNumber === "" ||
        deviceType === "" ||
        problem === "" ||
        payment === ""
    ) {

        // Display an error message
        alert("Please fill in all required fields.");

        return;

    }

    // If M-Pesa is selected, ensure a phone number is entered
    if (payment === "M-Pesa" && paymentNumber === "") {

        alert("Please enter the M-Pesa phone number.");

        return;

    }

    // Create a repair object to store the repair details
    const repair = {

        // Generate a unique ID using the current time
        id: Date.now(),

        // Store customer details
        customerName: customerName,

        phoneNumber: phoneNumber,

        deviceType: deviceType,

        problem: problem,

        status: status,

        paymentMethod: payment,

        paymentNumber: paymentNumber

    };

    // Get existing repairs from local storage
    // If none exist, create an empty array
    let repairs = JSON.parse(localStorage.getItem("repairs")) || [];

    // Add the new repair to the array
    repairs.push(repair);

    // Save the updated repair list back to local storage
    localStorage.setItem("repairs", JSON.stringify(repairs));

    // Inform the user that the repair was saved
    alert("Repair request saved successfully!");

    // Clear all form fields
    repairForm.reset();

    // Hide the M-Pesa section after resetting the form
    mpesaSection.style.display = "none";

});

// Display a message in the browser console
console.log("Repair page loaded successfully.");