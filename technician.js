// Checks if the technician is logged in
// If not logged in, redirect the user back to the login page
if (sessionStorage.getItem("loggedIn") !== "true") {

    window.location.href = "login.html";

}


// Gets the repair list table body from HTML
const repairList = document.getElementById("repairList");

// Gets the search input field from HTML
const searchInput = document.getElementById("searchInput");



// Function to get repair requests from local storage
function getRepairs() {

    // Converts stored JSON data back into an array
    // If no repairs exist, return an empty array
    return JSON.parse(localStorage.getItem("repairs")) || [];

}



// Function to save updated repair data into local storage
function saveRepairs(repairs) {

    // Converts the array into JSON format and stores it
    localStorage.setItem("repairs", JSON.stringify(repairs));

}



// Function to update the dashboard statistics cards
function updateDashboard(repairs) {


    // Displays total number of repairs
    document.getElementById("totalRepairs").textContent = repairs.length;



    // Counts repairs that are still pending
    const pending = repairs.filter(function(repair){

        return repair.status === "Pending";

    }).length;



    // Counts repairs that have been completed
    const completed = repairs.filter(function(repair){

        return repair.status === "Completed";

    }).length;



    // Displays pending repairs count
    document.getElementById("pendingRepairs").textContent = pending;


    // Displays completed repairs count
    document.getElementById("completedRepairs").textContent = completed;


}




// Function that displays repair requests in the table
// searchText allows filtering of repair records
function loadRepairs(searchText = "") {


    // Gets all saved repairs
    const repairs = getRepairs();


    // Updates dashboard numbers
    updateDashboard(repairs);


    // Clears the table before adding updated information
    repairList.innerHTML = "";



    // Filters repairs based on customer name, phone number, or device
    const filteredRepairs = repairs.filter(function(repair){

        return (

            repair.customerName.toLowerCase().includes(searchText.toLowerCase()) ||

            repair.phoneNumber.includes(searchText) ||

            repair.deviceType.toLowerCase().includes(searchText.toLowerCase())

        );

    });



    // Shows a message if no repair requests match the search
    if(filteredRepairs.length === 0){


        repairList.innerHTML = `

        <tr>

            <td colspan="9">

                📭 No repair requests found.

            </td>

        </tr>

        `;


        return;

    }



    // Loops through each repair and creates a table row
    filteredRepairs.forEach(function(repair,index){


        repairList.innerHTML += `

        <tr>

            <!-- Displays repair number -->
            <td>${index + 1}</td>


            <!-- Displays customer information -->
            <td>${repair.customerName}</td>

            <td>${repair.phoneNumber}</td>


            <!-- Displays device information -->
            <td>${repair.deviceType}</td>


            <!-- Displays repair problem -->
            <td>${repair.problem}</td>



            <!-- Displays repair status -->
            <td>

                <span class="status ${repair.status.toLowerCase()}">

                    ${repair.status}

                </span>

            </td>



            <!-- Displays payment information -->
            <td>${repair.paymentMethod}</td>

            <td>${repair.paymentNumber || "-"}</td>



            <!-- Action buttons -->
            <td>


                <!-- Button to mark repair as completed -->
                <button class="complete-btn"

                onclick="completeRepair(${repair.id})">

                ✔

                </button>



                <!-- Button to delete repair -->
                <button class="delete-btn"

                onclick="deleteRepair(${repair.id})">

                🗑

                </button>


            </td>


        </tr>

        `;


    });


}




// Function used to change a repair status to completed
function completeRepair(id){


    // Gets all repairs
    const repairs = getRepairs();


    // Finds the repair with the matching ID
    const repair = repairs.find(function(item){

        return item.id === id;

    });



    // Changes status if repair exists
    if(repair){

        repair.status = "Completed";

    }



    // Saves updated repair list
    saveRepairs(repairs);


    // Reloads the table
    loadRepairs(searchInput.value);


}





// Function used to delete a repair request
function deleteRepair(id){


    // Shows confirmation message before deleting
    if(!confirm("Delete this repair request?")){

        return;

    }



    // Removes the repair with the matching ID
    const repairs = getRepairs().filter(function(item){

        return item.id !== id;

    });



    // Saves the updated list
    saveRepairs(repairs);



    // Refreshes the repair table
    loadRepairs(searchInput.value);


}





// Runs whenever the user types in the search box
searchInput.addEventListener("input", function(){


    // Loads repairs matching the search text
    loadRepairs(searchInput.value);


});



// Loads repairs automatically when the page opens
loadRepairs();


// Message shown in browser console
console.log("Technician Portal Loaded Successfully.");




// Gets the logout button
const logoutBtn = document.getElementById("logoutBtn");


// Checks if the logout button exists
if (logoutBtn) {


    // Runs when the logout button is clicked
    logoutBtn.addEventListener("click", function () {


        // Removes login information from session storage
        sessionStorage.removeItem("loggedIn");


        // Sends technician back to login page
        window.location.href = "login.html";


    });


}