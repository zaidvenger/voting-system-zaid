// commission.js

// Function to fetch live data from an API
async function fetchVoterLogs() {
    try {
        const response = await fetch('https://api.example.com/voterLogs'); // Replace with actual API endpoint
        const voterLogs = await response.json();
        sessionStorage.setItem('voterLogs', JSON.stringify(voterLogs));
    } catch (error) {
        console.error('Error fetching voter logs:', error);
    }
}

// Function to fetch candidate votes from an API
async function fetchCandidateVotes() {
    try {
        const response = await fetch('https://api.example.com/candidateVotes'); // Replace with actual API endpoint
        const votes = await response.json();
        sessionStorage.setItem('votes', JSON.stringify(votes));
    } catch (error) {
        console.error('Error fetching candidate votes:', error);
    }
}

// Function to update the voter log table
function updateVoterLogTable() {
    try {
        const voterLogs = JSON.parse(sessionStorage.getItem('voterLogs')) || [];
        const tableBody = document.getElementById('voterLogTableBody');
        tableBody.innerHTML = '';

        voterLogs.forEach(log => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${log.serial}</td>
                <td>${log.voterId}</td>
                <td>${log.time}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error updating voter log table:', error);
    }
}

// Function to update the candidate vote count section
function updateCandidateVoteCounts() {
    try {
        const votes = JSON.parse(sessionStorage.getItem('votes')) || [];
        const voteCountSection = document.getElementById('candidateVoteCounts');
        voteCountSection.innerHTML = '';

        votes.forEach(candidate => {
            const candidateInfo = document.createElement('p');
            candidateInfo.textContent = `${candidate.name}: ${candidate.votes} votes`;
            voteCountSection.appendChild(candidateInfo);
        });
    } catch (error) {
        console.error('Error updating candidate vote counts:', error);
    }
}

// Initialize and periodically update the table and vote counts
setInterval(async () => {
    await fetchVoterLogs(); // Fetch live voter logs from the API
    await fetchCandidateVotes(); // Fetch live candidate votes from the API
    updateVoterLogTable();
    updateCandidateVoteCounts();
}, 2000);
