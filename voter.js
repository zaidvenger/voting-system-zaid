// Valid voter IDs
const validVoterIds = ["12345", "67890", "11111", "22222", "33333"];

// Verify voter
function verifyVoter() {
    const voterId = document.getElementById("voterIdInput").value;
    if (validVoterIds.includes(voterId)) {
        document.getElementById("votingSection").style.display = "block";
    } else {
        alert("Invalid voter ID!");
    }
}

// Submit vote
function submitVote(voterId, candidate) {
    const votes = JSON.parse(localStorage.getItem("votes")) || [];
    const candidateIndex = votes.findIndex(c => c.name === candidate);
    if (candidateIndex !== -1) {
        votes[candidateIndex].votes += 1;
    } else {
        votes.push({ name: candidate, votes: 1 });
    }
    localStorage.setItem("votes", JSON.stringify(votes));

    const log = JSON.parse(localStorage.getItem("voterLog")) || [];
    const currentTime = new Date().toLocaleString();
    log.push({ voterId, time: currentTime });
    localStorage.setItem("voterLog", JSON.stringify(log));

    document.getElementById("votingSection").style.display = "none";
    document.getElementById("thankYouScreen").style.display = "block";
}
