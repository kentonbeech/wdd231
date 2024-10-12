// Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;

// Divide the url into two halves
const everything = currentUrl.split('?');

// Grab just the second half
let formData = everything[1].split('&');


function show(cup) {
    formData.forEach(element => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@").replace(/\+/g, " ")
        }
    });
    return (result)
};

const showInfo = document.querySelector('#userInfo');
const now = new Date();
const currentDateTime = now.toLocaleString();

showInfo.innerHTML = `
<div class="thankyou-container heading">
<h3>Registration Details</h3>
</div>
<div class="thankyou-container">
<p><strong>First Name *</strong></p> <p>${show("firstName")}</p>
</div>
<div class="thankyou-container">
<p><strong>Last Name *</strong></p> <p>${show("lastName")}</p>
</div>
<div class="thankyou-container">
<p><strong>Email *</strong></p> <p>${show("email")}</p>
</div>
<div class="thankyou-container">
<p><strong>Phone Number *</strong></p> <p>${show("tel")}</p>
</div>
<div class="thankyou-container">
<p><strong>Organization Name *</strong></p> <p>${show("orgName")}</p>
</div>
<div class="thankyou-container">
<p><strong>Membership Level *</strong></p> <p>${capitalize(show("memLevel"))}</p>
</div>
<div class="thankyou-container">
<p><strong>Registration date *</strong></p> <p>${currentDateTime}</p>
</div>
`


function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}