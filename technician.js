const repairList = document.getElementById("repairList");

function loadRepairs() {

    const repairs = JSON.parse(localStorage.getItem("repairs")) || [];

    repairList.innerHTML = "";

    if (repairs.length === 0) {

        repairList.innerHTML = `
            <tr>
                <td colspan="8">No repair requests found.</td>
            </tr>
        `;

        return;
    }

    repairs.forEach(function (repair, index) {

        repairList.innerHTML += `
            <tr>

                <td>${index + 1}</td>

                <td>${repair.customerName}</td>

                <td>${repair.phoneNumber}</td>

                <td>${repair.deviceType}</td>

                <td>${repair.problem}</td>
                
                <td>${repair.status}</td>
                
                <td>${repair.paymentMethod}</td>
                
                <td>${repair.paymentNumber || "-"}</td>
                
                <td>
                
                <button onclick="completeRepair(${repair.id})">Complete</button>
                
                <button onclick="deleteRepair(${repair.id})">Delete</button>
                
                </td>

            </tr>
        `;

    });

}

function completeRepair(id) {

    let repairs = JSON.parse(localStorage.getItem("repairs")) || [];

    repairs = repairs.map(function (repair) {

        if (repair.id === id) {

            repair.status = "Completed";

        }

        return repair;

    });

    localStorage.setItem("repairs", JSON.stringify(repairs));

    loadRepairs();

}

function deleteRepair(id) {

    const confirmDelete = confirm("Delete this repair request?");

    if (!confirmDelete) return;

    let repairs = JSON.parse(localStorage.getItem("repairs")) || [];

    repairs = repairs.filter(function (repair) {

        return repair.id !== id;

    });

    localStorage.setItem("repairs", JSON.stringify(repairs));

    loadRepairs();

}

loadRepairs();

console.log("Technician Portal Loaded Successfully.");