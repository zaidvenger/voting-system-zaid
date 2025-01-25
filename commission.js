// Fetch voter log
function fetchVoterLog() {
    return JSON.parse(localStorage.getItem("voterLog")) || [];
}

// Render voter log table
function renderVoterLog() {
    const log = fetchVoterLog();
    const tableBody = document.getElementById("voterLogTableBody");
    tableBody.innerHTML = "";

    log.forEach((entry, index) => {
        const row = document.createElement("tr");

        const serialCell = document.createElement("td");
        serialCell.innerText = index + 1;
        row.appendChild(serialCell);

        const voterIdCell = document.createElement("td");
        voterIdCell.innerText = entry.voterId;
        row.appendChild(voterIdCell);

        const timeCell = document.createElement("td");
        timeCell.innerText = entry.time;
        row.appendChild(timeCell);

        tableBody.appendChild(row);
    });
}

// Auto-refresh table
document.addEventListener("DOMContentLoaded", () => {
    renderVoterLog();
    setInterval(renderVoterLog, 2000);
});
