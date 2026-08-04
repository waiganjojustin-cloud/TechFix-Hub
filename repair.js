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
