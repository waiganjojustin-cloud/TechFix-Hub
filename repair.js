const repairForm = document.getElementById("repairForm");
const paymentMethod = document.getElementById("paymentMethod");
const mpesaSection = document.getElementById("mpesaSection");

if (paymentMethod) {

    paymentMethod.addEventListener("change", function () {

        if (paymentMethod.value === "M-Pesa") {

            mpesaSection.style.display = "block";

        } else {

            mpesaSection.style.display = "none";

            document.getElementById("paymentNumber").value = "";

        }

    });

}

repairForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const deviceType = document.getElementById("deviceType").value;
    const problem = document.getElementById("problem").value.trim();
    const status = document.getElementById("status").value;
    const payment = paymentMethod.value;
    const paymentNumber = document.getElementById("paymentNumber").value.trim();

    if (
        customerName === "" ||
        phoneNumber === "" ||
        deviceType === "" ||
        problem === "" ||
        payment === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }

    if (payment === "M-Pesa" && paymentNumber === "") {

        alert("Please enter the M-Pesa phone number.");

        return;

    }