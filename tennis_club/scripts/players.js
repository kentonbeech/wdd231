// Target the cards container
const cards = document.getElementById('cards');

// Get player data from JSON file
const url = "./data/players.json";
async function getPlayerData() {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Return the fetched data
}

// Display player data
const displayPlayers = (players) => {
    players.forEach((player) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let cardContent = document.createElement('div');
        let cardInfo = document.createElement('div');
        let fullName = document.createElement('h1');  // For player name
        let portrait = document.createElement('img');

        // Add classes for styling
        cardContent.classList.add('cardContent');
        cardInfo.classList.add('cardInfo');

        // Set player name in the h3 element
        fullName.textContent = `${player.name}`;

        // Set the image attributes, use a placeholder if image is missing
        portrait.setAttribute('src', player.image || 'images/placeholder.png'); // Fallback image
        portrait.setAttribute('alt', `Portrait of ${player.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '50%');
        // portrait.setAttribute('height', '440');

        // Append elements to the card
        card.appendChild(fullName);                // Player name (h3)
        cardContent.appendChild(portrait);         // Player image
        cardContent.appendChild(cardInfo);         // Wrapper for additional info

        card.appendChild(cardContent);

        // Append the entire card to the parent container
        cards.appendChild(card);
    }); // End of forEach loop
}

// Fetch and display players
getPlayerData().then(data => {
    displayPlayers(data.players);  // Access the players array correctly
});
