// Valid voter IDs
const validVoterIds = ["12345", "67890", "11111", "22222", "33333"];
let voterVerified = false; // Flag to check if voter has been verified

// Verify voter function
function verifyVoter() {
    const voterId = document.getElementById("voterIdInput").value.trim();
    if (validVoterIds.includes(voterId)) {
        voterVerified = true;
        document.getElementById("votingSection").classList.remove("hidden");
        alert("Voter ID verified! You can now vote.");
    } else {
        alert("Invalid Voter ID! Please try again.");
    }
}

// Submit vote function
function submitVote(candidate) {
    if (!voterVerified) {
        alert("Please verify your Voter ID before voting.");
        return;
    }

    // Retrieve stored votes from localStorage or initialize
    const votes = JSON.parse(localStorage.getItem("votes")) || [];
    const candidateIndex = votes.findIndex(c => c.name === candidate);

    if (candidateIndex !== -1) {
        votes[candidateIndex].votes += 1;
    } else {
        votes.push({ name: candidate, votes: 1 });
    }

    // Save updated votes to localStorage
    localStorage.setItem("votes", JSON.stringify(votes));

    // Hide voting section and show thank you screen
    document.getElementById("votingSection").classList.add("hidden");
    document.getElementById("thankYouScreen").classList.remove("hidden");
}
