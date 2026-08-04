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

                <td>${repair.paymentMethod}</td>

                <td>${repair.status}</td>

                <td>

                    <button onclick="completeRepair(${repair.id})">
                        Complete
                    </button>

                    <button onclick="deleteRepair(${repair.id})">
                        Delete
                    </button>

                </td>

            </tr>
        `;

    });

}
