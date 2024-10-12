const data = [
	item1 = {
		title: "Non-Profit Organization Level",
		cost: "Free!",
		benefits: ["Access to community events", "Basic training sessions", "Listing in business directory"]
	},
	item2 = {
		title: "Bronze Level",
		cost: "R499 Per Year",
		benefits: ["Access to community events", "Enhanced training sessions", "Enhanced business directory listing"]
	},
	item3 = {
		title: "Silver Level",
		cost: "R999 Per Year",
		benefits: ["All Bronze-level benefits", "Access to member-only events", "Spotlight on home page (randomly featured)"]
	},
	item4 = {
		title: "Gold Level",
		cost: "R1499 Per Year",
		benefits: ["All Silver-level benefits", "Guaranteed spotlight on home page", "Invitations to VIP events"]
	}
];

function displayCourseDetailsDialog(buttonIndex) {
	const courseDetailsDialog = document.querySelector('#course-details');
	const courseDetailsContent = document.querySelector('.dialog-content');
	const modalHeading = courseDetailsContent.querySelector("h3");
	const modalCost = courseDetailsContent.querySelector("h4");
	const modalList = courseDetailsContent.querySelector("ul");
	let listItems = ``;

	modalHeading.textContent = data[buttonIndex].title;
	modalCost.textContent = data[buttonIndex].cost;

	data[buttonIndex].benefits.forEach(benefit => {
		listItems += `<li>${benefit}</li>`;
	});

	modalList.innerHTML = listItems;

	courseDetailsDialog.showModal();

	closeModal.addEventListener("click", () => {
		courseDetailsDialog.close();
	});

	courseDetailsDialog.addEventListener('click', (event) => {
		if (event.target === courseDetailsDialog) {
			courseDetailsDialog.close();
		};
	});
}

function createEvents() {
	const buttons = document.querySelectorAll(".member__btn");
	buttons.forEach((button, index) => {
		button.addEventListener("click", () => {
			displayCourseDetailsDialog(index);
		});
	});
}

// nonProfit.addEventListener('click', () => {
//   displayCourseDetailsDialog();
// });

window.addEventListener("load", () => {
	createEvents();
});