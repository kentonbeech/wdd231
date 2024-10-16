// Get company data from JSON file
const url = "./data/members.json";
async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Return the fetched data
}

// getCompanyData();


// Display company data with an optional membership filter
const displayCompanies = (companies, filterMembershipLevel = false) => {
  companies.forEach((company) => {
      // Check if membership level filtering is needed (only for index.html)
      if (filterMembershipLevel) {
          const membershipLevel = company["membership level"]; // Access the membership level string

          // Check if the company has either "silver" or "gold" membership
          const isGoldOrSilver = membershipLevel === "gold" || membershipLevel === "silver";

          // Skip the company if it doesn't have either gold or silver
          if (!isGoldOrSilver) {
              return; // Exit this iteration and don't display the company
          }
      }

      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let cardContent = document.createElement('div');
      let cardInfo = document.createElement('div');
      let fullName = document.createElement('h3');  // For company name
      let portrait = document.createElement('img');
      let phone = document.createElement('p');
      let number = document.createElement('span');
      let url = document.createElement('p');
      let link = document.createElement('a');
      let email = document.createElement('p');
      let address = document.createElement('a');

      // Add classes for styling
      cardContent.classList.add('cardContent');
      cardInfo.classList.add('cardInfo');

      // Set company name in the h3 element
      fullName.textContent = `${company.name}`;

      // Set the image attributes for the portrait
      portrait.setAttribute('src', company.image);
      portrait.setAttribute('alt', `Portrait of ${company.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Create phone number section
      phone.innerHTML = `<strong>Phone:</strong> `;
      number.textContent = `${company["phone number"]}`;
      phone.appendChild(number);

      // Create URL section
      link.textContent = `${company["website url"]}`.replace("https://", "");
      link.href = `${company["website url"]}`;
      link.target = '_blank';  // Opens in a new tab
      url.innerHTML = `<strong>URL: </strong> `;
      url.appendChild(link);

      // Create Email section
      email.innerHTML = `<strong>Email:</strong> `;
      address.textContent = `${company.address}`;
      email.appendChild(address);

      // Append elements to the card
      card.appendChild(fullName);                // Company name (h3)
      cardContent.appendChild(portrait);         // Company image
      cardContent.appendChild(cardInfo);         // Wrapper for additional info
      cardInfo.appendChild(email);
      cardInfo.appendChild(phone);               // Phone number
      cardInfo.appendChild(url);                 // Website URL

      card.appendChild(cardContent);

      // Append the entire card to the parent container
      cards.appendChild(card);
  }); // End of forEach loop
}

// Call the function for index.html to filter by gold or silver
getCompanyData().then(data => {
  displayCompanies(data.companies, false);  // Show only companies with either silver or gold membership
});




function initThemeEvents() {
  const toggle = document.querySelector(".color__toggle");
  const bodyElement = document.body;
  toggle.addEventListener("click", () => {
    if (bodyElement.classList.contains('dark-theme')) {
      bodyElement.classList.remove('dark-theme');
      return;
    }
    bodyElement.classList.add('dark-theme');
  });
}

// Switch between grid and list layout of companies
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleLayoutBtn');
  const cardsContainer = document.getElementById('cards');

  toggleBtn.addEventListener('click', function () {
    // Toggle the 'list-view' class on the cards container
    cardsContainer.classList.toggle('list-view');

    // Update the button text based on the current layout
    if (cardsContainer.classList.contains('list-view')) {
      toggleBtn.textContent = 'Grid View';
    } else {
      toggleBtn.textContent = 'List View';
    }
  });

  initThemeEvents();
});