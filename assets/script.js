//get dropdown from document
const dropdowns = document.querySelectorAll(".faq");

//loop through all dropdown elements
dropdowns.forEach((faq) => {
  //get inner element from each dropdown
  const accordion = faq.querySelector(".accordion");
  const fag__icon = faq.querySelector(".fag__icon");
  const pannel = faq.querySelector(".pannel");
  const options = faq.querySelectorAll(".pannel p");

  //add a click event to the select element
  accordion.addEventListener("click", () => {
    //add the clicked select styles to the selected element
    accordion.classList.toggle("accordion-clicked");
    //add the clicked select styles to the selected element
    fag__icon.classList.toggle("fag__icon--rotate");
    //add the clicked select styles to the selected element
    pannel.classList.toggle("pannel-open");
  });
});

//ques sidebar focus
const sidebar = document.querySelectorAll(".ques-item");
sidebar.forEach((quesItem) => {
  const sideitem = quesItem.querySelector(".ques-item a");

  sideitem.addEventListener("click", () =>
    sideitem.classList.toggle("ques-item__active")
  );
});

//more dropdown on mobile
const mainques = document.querySelectorAll(".main-ques__content");
mainques.forEach((quesHeading) => {
  const heading = quesHeading.querySelector(".main-ques__heading");
  const faq = quesHeading.querySelector(".faq--block");

  heading.addEventListener("click", () => {
    heading.classList.toggle("main-ques__heading--active");
    faq.classList.toggle("faq--block--active");
  });
});

/* form pop-up */
document.addEventListener("DOMContentLoaded", (event) => {
  const section = document.querySelector(".form--popup"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".show-modal button"),
    showEmail = document.querySelector(".show-email button"),
    closeBtn = document.querySelector(".close-btn");

  showBtn.addEventListener("click", () => section.classList.add("active"));
  showEmail.addEventListener("click", () => section.classList.add("active"));
  overlay.addEventListener("click", () => section.classList.remove("active"));
  closeBtn.addEventListener("click", () => section.classList.remove("active"));
});

/**/

$(document).ready(function () {
  // Handle submit for info form
  $("#infoForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission
    $.ajax({
      url: "FAQS.php",
      type: "POST",
      data: $(this).serialize() + "&action=Submit Info",
      success: function (response) {
        console.log("Infor form submitted successfully.");
        // alert(response);
      },
    });
  });

  // Handle submit for email form
  $("#emailForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission
    $.ajax({
      url: "FAQS.php",
      type: "POST",
      data: $(this).serialize() + "&action=Submit Email",
      success: function (response) {
        console.log("Email form submitted successfully.");
        $("#popupbox").modal("show");
      },
    });
  });
});

//  <!-- click text copy -->
function copyToClipboard(element, text) {
  // Create a temporary input element
  var tempInput = document.createElement("input");
  // Set its value to the text to be copied
  tempInput.value = text;
  // Append it to the body
  document.body.appendChild(tempInput);
  // Select the text in the input
  tempInput.select();
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Alert the user that the text has been copied
  // alert("Copied to clipboard: " + text);
  var notification = element.querySelector(".copy-notification");
  notification.style.display = "inline";
  setTimeout(function () {
    notification.style.display = "none";
  }, 2000); // Hide the notification after 2 seconds
}
