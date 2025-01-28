const voterIds = ["1234", "5678", "91011"];
let usedVoterIds = [];
const candidates = [
    { name: "Alice", votes: 0 },
    { name: "Bob", votes: 0 },
    { name: "Charlie", votes: 0 },
];

function verifyVoter() {
    const voterIdInput = document.getElementById("voterIdInput").value;

    if (voterIds.includes(voterIdInput) && !usedVoterIds.includes(voterIdInput)) {
        alert("Voter ID verified! You can now vote.");
        usedVoterIds.push(voterIdInput);
        document.getElementById("voterSection").style.display = "none";
        document.getElementById("candidates").style.display = "block";
        displayCandidates();
    } else if (usedVoterIds.includes(voterIdInput)) {
        alert("This Voter ID has already been used.");
    } else {
        alert("Invalid Voter ID.");
    }
}

function displayCandidates() {
    const candidateList = document.getElementById("candidateList");
    candidateList.innerHTML = candidates
        .map((c, i) => `<button onclick="vote(${i})">${c.name}</button>`)
        .join("");
}

function vote(index) {
    candidates[index].votes++;
    document.getElementById("candidates").style.display = "none";
    document.getElementById("thankYouSection").style.display = "block";
}

// Election Commission Graph
window.onload = function () {
    const ctx = document.getElementById("votesChart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: candidates.map(c => c.name),
            datasets: [
                {
                    label: "Votes",
                    data: candidates.map(c => c.votes),
                    backgroundColor: "#0056b3",
                },
            ],
        },
    });
};
