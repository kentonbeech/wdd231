document.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
});

function setActiveLink() {
  const links = document.querySelectorAll("#navMenu li a");
  const currentUrl = window.location.href;

  // Remove 'active' class from all links
  links.forEach(link => link.classList.remove("active"));

  // Add 'active' class to the link that matches the current URL
  links.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });

  // Add event listener for click event
  links.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' class from all links
      links.forEach(link => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });
}

// // Hamburger Menu
// document.getElementById("hamburger").addEventListener("click", function () {
//   let navMenu = document.getElementById("navMenu");
//   navMenu.classList.toggle("close");
//   navMenu.classList.toggle("active");
//   console.log(navMenu);
// });

// Mobile hamburger functionality to handle menu disappearing when user scrolls, or clicks outside menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', function () {
    if (navMenu.classList.contains('close')) {
      navMenu.classList.remove('close');
      navMenu.classList.add('active');
    } else {
      navMenu.classList.remove('active');
      navMenu.classList.add('close');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('active');
      navMenu.classList.add('close');
    }
  });

  // Close menu when scrolling
  window.addEventListener('scroll', function () {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navMenu.classList.add('close');
    }
  });
});


// LastModified in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML += `Last Modified: ${lastModified}`;

// Get the current year
const currentYear = new Date().getFullYear();
// Insert the year into the element with id "year"
document.getElementById('year').textContent = currentYear;




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

initThemeEvents();




// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  const logoDiv = document.getElementsByClassName("logo")[0];
  const logoImage = logoDiv.getElementsByTagName("img")[0];
  const menuSub = document.querySelector("#navMenu");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    logoImage.style.width = "150px";
    menuSub.style.top = "97px";
  } else {
    menuSub.style.top = "120px";
    logoImage.style.width = "200px";
  }
}
