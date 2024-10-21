// Function to calculate days between two dates
function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((date1 - date2) / oneDay));
}

// Check for the last visit date in localStorage
const lastVisit = localStorage.getItem('lastVisit');
const now = new Date();

if (!lastVisit) {
    // First visit
    document.getElementById('visitMessage').innerText = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = new Date(lastVisit);
    const daysSinceLastVisit = daysBetween(now, lastVisitDate);

    if (daysSinceLastVisit < 1) {
        // Less than a day since last visit
        document.getElementById('visitMessage').innerText = "Back so soon! Awesome!";
    } else {
        // More than a day since last visit
        const dayText = daysSinceLastVisit === 1 ? "day" : "days";
        document.getElementById('visitMessage').innerText = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }
}

// Update the last visit date in localStorage
localStorage.setItem('lastVisit', now.toString());
