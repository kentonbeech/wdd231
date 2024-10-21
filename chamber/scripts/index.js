// Your OpenWeatherMap API key
const apiKey = '54362e31f8a9437dfcce17bfafd155ad';

// Get references to the HTML elements
const weatherDiv = document.getElementById('weather');
const forecastDiv = document.getElementById('forecast');

// Function to fetch weather data from OpenWeatherMap
function fetchWeather() {
	const city = 'East London'; // You can change this to any city
	const country = 'ZA'; // South Africa country code
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

	fetch(weatherUrl)
		.then(response => response.json())
		.then(data => {
			const temp = Math.round(data.main.temp);
			const description = data.weather[0].description;
			const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
			const icon = data.weather[0].icon;
			const humidity = data.main.humidity; // Humidity in percentage

			// Format sunrise and sunset without seconds
			const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
			const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

			weatherDiv.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        <span class="weather__info"><p><strong>${temp}</strong> °C</p>
        <p>${capitalizedDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p></span>
      `;
		})
		.catch(error => console.error('Error fetching weather data:', error));
}

// Function to fetch weather forecast
function fetchForecast() {
	const city = 'East London';
	const country = 'ZA';
	const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`;

	fetch(forecastUrl)
		.then(response => response.json())
		.then(data => {
			const forecastList = data.list; // Get all forecast entries
			const today = new Date(); // Get today's date
			const tomorrow = new Date(today);
			tomorrow.setDate(today.getDate() + 1); // Set to tomorrow

			const dailyForecast = {}; // Object to hold daily forecasts

			// Loop through the forecast data
			forecastList.forEach(forecast => {
				const forecastDate = new Date(forecast.dt * 1000);
				const dayString = forecastDate.toLocaleDateString(); // Get date as string to use as a key

				// Only consider forecasts for tomorrow or later
				if (forecastDate >= tomorrow && !dailyForecast[dayString]) {
					dailyForecast[dayString] = {
						day: forecastDate.toLocaleString('en-US', { weekday: 'long' }), // Get day name
						tempHigh: Math.round(forecast.main.temp_max),
						tempLow: Math.round(forecast.main.temp_min),
						icon: forecast.weather[0].icon
					};
				}
			});

			// Create the HTML output for the forecast

			// Limit to 3 days
			const days = Object.values(dailyForecast).slice(0, 4);
			days.forEach(dayForecast => {
				forecastDiv.innerHTML += `
          <div class="forecast-item">
            <span>${dayForecast.day}
            <img src="https://openweathermap.org/img/wn/${dayForecast.icon}@2x.png" alt="weather icon" style="width: 50px; height: auto;">
            Temp: ${dayForecast.tempHigh} / ${dayForecast.tempLow}°C
            </span>
          </div>
        `;
			});
		})
		.catch(error => console.error('Error fetching forecast data:', error));
}


// Call the fetch functions when the page loads
window.addEventListener('load', () => {
	fetchWeather();
	fetchForecast();
});



const url = "./data/members.json";

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Return the fetched data
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

const displayCompanies = (companies, filterMembershipLevel = false) => {
    // Filter companies based on membership level
    if (filterMembershipLevel) {
        companies = companies.filter(company =>
            company["membership level"] === "gold" ||
            company["membership level"] === "silver",
            console.log(companies)
        );
    }

    // Shuffle the filtered companies
    companies = shuffleArray(companies);

    // Create and append cards for each company
    companies.forEach(company => {
        let card = document.createElement('section');
        let cardContent = document.createElement('div');
        let cardInfo = document.createElement('div');
        let fullName = document.createElement('h3');
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
        fullName.textContent = company.name;

        // Set the image attributes for the portrait
        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Portrait of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Create phone number section
        phone.innerHTML = `<strong>Phone:</strong> `;
        number.textContent = company["phone number"];
        phone.appendChild(number);

        // Create URL section
        link.textContent = company["website url"].replace("https://", "");
        link.href = company["website url"];
        link.target = '_blank';  // Opens in a new tab
        url.innerHTML = `<strong>URL: </strong>`;
        url.appendChild(link);

        // Create Email section
        email.innerHTML = `<strong>Email:</strong> `;
        address.textContent = company.address;
        email.appendChild(address);

        // Append elements to the card
        card.appendChild(fullName);
        cardContent.appendChild(portrait);
        cardContent.appendChild(cardInfo);
        cardInfo.appendChild(email);
        cardInfo.appendChild(phone);
        cardInfo.appendChild(url);
        card.appendChild(cardContent);

        // Append the entire card to the parent container
        cards.appendChild(card);
    });
}

// Call the function for index.html to filter by gold or silver
getCompanyData().then(data => {
    displayCompanies(data.companies, true);  // Show only companies with either silver or gold membership
});



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

});

gsap.from('.home__grid', { duration: 1.5, y: '50%', ease: 'power1.in', opacity: 0 })
// gsap.from('.current__weather', { duration: 1.5, x: '100%', ease: 'power2.in', opacity: 0 })
// gsap.from('.grid__content', { duration: 1, delay: 1, ease: 'powerin', opacity: 0 })