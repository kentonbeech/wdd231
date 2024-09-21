// document.addEventListener("DOMContentLoaded", function() {
//   const hamburger = document.getElementById("Hamburger");
//   const navMenu = document.getElementById("PrimaryNav");

//   // Toggle the menu on click
//   hamburger.addEventListener("click", function() {
//     navMenu.classList.toggle("active");
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
});

function setActiveLink() {
  const links = document.querySelectorAll(".navigation li a");
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




// Selecting the hamburger menu and navigation
const hamburger = document.getElementById("Hamburger");
const navMenu = document.querySelector(".navigation");

// Add click event listener to the hamburger
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Toggle 'active' class to show/hide menu
  hamburger.classList.toggle("active")
});

// Remove 'active' class when window is resized to more than 980px
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    navMenu.classList.remove("active");
  }
});








const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&#xA9 ${today.getFullYear()}`;


const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML += `Last Update: ${lastModified}`;


const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
]


const coursesDiv = document.querySelector('.courses');

const allCoursesButton = document.querySelector('.all__courses');
const cseCourses = document.querySelector('.cse__courses');
const wddCourses = document.querySelector('.wdd__courses');


allCoursesButton.addEventListener('click', (e) => {
  allCoursesButton.classList.add("sub__nav__selected")
  cseCourses.classList.remove("sub__nav__selected")
  wddCourses.classList.remove("sub__nav__selected")
  createCourses(courses);
});

cseCourses.addEventListener('click', (e) => {
  allCoursesButton.classList.remove("sub__nav__selected")
  cseCourses.classList.add("sub__nav__selected")
  wddCourses.classList.remove("sub__nav__selected")
  createCourses(courses.filter((course) => course.subject === 'CSE'));
});

wddCourses.addEventListener('click', (e) => {
  allCoursesButton.classList.remove("sub__nav__selected")
  cseCourses.classList.remove("sub__nav__selected")
  wddCourses.classList.add("sub__nav__selected")
  createCourses(courses.filter((course) => course.subject === 'WDD'));
});


function createCourses(filteredCourses) {
  coursesDiv.innerHTML = '';
  for (const course of filteredCourses) {
      let courseDiv = document.createElement('div');
      courseDiv.className = 'course';
      if (course.completed) {
          courseDiv.classList.add('completed');
      }
      courseDiv.innerHTML = `${course.subject} ${course.number} (${course.credits})`;
      coursesDiv.appendChild(courseDiv);
  }
}

createCourses(courses);
allCoursesButton.classList.add("sub__nav__selected")

const creditsRemainingSpan = document.querySelector('.credits-remaining');
let creditsRemaining = courses
    .filter((course) => course.completed === false)
    .reduce((accumulator, course) => accumulator + course.credits, 0)

creditsRemainingSpan.innerHTML = `(${creditsRemaining} credits remaining)`;


// function setActiveLink() {
//   const links = document.querySelectorAll(".navigation li a");
//   const currentUrl = window.location.href;

//   // Loop through each link to check the URL and set the active class
//   links.forEach(link => {
//     if (link.href === currentUrl) {
//       link.classList.add('active');
//     }

//     // Add click event listener for each link
//     link.addEventListener('click', () => {
//       // Remove 'active' class from all links before adding to the clicked one
//       links.forEach(link => link.classList.remove('active'));

//       // Set the clicked link as active
//       link.classList.add('active');
//     });
//   });
// }

// // Call the function to set active link on page load
// window.onload = setActiveLink();
