const repairList = document.getElementById("repairList");
const searchInput = document.getElementById("searchInput");

function getRepairs() {

    return JSON.parse(localStorage.getItem("repairs")) || [];

}

function saveRepairs(repairs) {

    localStorage.setItem("repairs", JSON.stringify(repairs));

}

function updateDashboard(repairs) {

    document.getElementById("totalRepairs").textContent = repairs.length;

    const pending = repairs.filter(function(repair){

        return repair.status === "Pending";

    }).length;

    const completed = repairs.filter(function(repair){

        return repair.status === "Completed";

    }).length;

    document.getElementById("pendingRepairs").textContent = pending;

    document.getElementById("completedRepairs").textContent = completed;

}

function loadRepairs(searchText = "") {

    const repairs = getRepairs();

    updateDashboard(repairs);

    repairList.innerHTML = "";

    const filteredRepairs = repairs.filter(function(repair){

        return (

            repair.customerName.toLowerCase().includes(searchText.toLowerCase()) ||

            repair.phoneNumber.includes(searchText) ||

            repair.deviceType.toLowerCase().includes(searchText.toLowerCase())

        );

    });

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

    filteredRepairs.forEach(function(repair,index){

        repairList.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${repair.customerName}</td>

            <td>${repair.phoneNumber}</td>

            <td>${repair.deviceType}</td>

            <td>${repair.problem}</td>

            <td>

                <span class="status ${repair.status.toLowerCase()}">

                    ${repair.status}

                </span>

            </td>

            <td>${repair.paymentMethod}</td>

            <td>${repair.paymentNumber || "-"}</td>

            <td>

                <button class="complete-btn"

                onclick="completeRepair(${repair.id})">

                ✔

                </button>

                <button class="delete-btn"

                onclick="deleteRepair(${repair.id})">

                🗑

                </button>

            </td>

        </tr>

        `;

    });

}

function completeRepair(id){

    const repairs = getRepairs();

    const repair = repairs.find(function(item){

        return item.id === id;

    });

    if(repair){

        repair.status = "Completed";

    }

    saveRepairs(repairs);

    loadRepairs(searchInput.value);

}

function deleteRepair(id){

    if(!confirm("Delete this repair request?")){

        return;

    }

    const repairs = getRepairs().filter(function(item){

        return item.id !== id;

    });

    saveRepairs(repairs);

    loadRepairs(searchInput.value);

}

searchInput.addEventListener("input", function(){

    loadRepairs(searchInput.value);

});

loadRepairs();

console.log("Technician Portal Loaded Successfully.");