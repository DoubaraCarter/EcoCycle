async function fetchAndDisplayFacts() {
    try {
        const response = await fetch('../../script/facts.json');
        const data = await response.json();

        console.log(data);

        const factDisplay = document.getElementById('factDisplay');
        let currentIndex = 0;

        // Display the first fact immediately
        factDisplay.innerHTML = data.facts[currentIndex];

        // Set interval to change the fact every 8 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % data.facts.length;
            factDisplay.innerHTML = data.facts[currentIndex];
        }, 5000); // 8 seconds interval
    } catch (error) {
        console.error('Error fetching and displaying facts:', error);
    }
}

// Call the function
fetchAndDisplayFacts();