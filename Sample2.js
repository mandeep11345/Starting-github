// Wait for the entire HTML document to load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Select the button inside the .hero section
    const herobtn = document.querySelector(".hero button");

    // Select the entire .hero section
    const herosection = document.querySelector(".hero");

    // Add a click event listener to the hero button
    herobtn.addEventListener("click", () => {
        // Show an alert message when the button is clicked
        alert("Welcome to the Indian Defense Forces website");

        // Change the text inside the <h1> of the hero section
        herosection.querySelector("h1").textContent = "Join Indian Defence today";

        // Change the button text to "Explore Again"
        herobtn.textContent = "Explore Again";
    });

    // Select all <h3> headings inside elements with class .card
    const cards = document.querySelectorAll(".card h3");

    // Define an array of colors to apply to the cards
    const colors = ["#592c5c", "#3498db", "#d5281cff"];

    // Loop through each card and apply a color from the array
    cards.forEach((ele, index) => {
        // Use modulo (%) in case there are more cards than colors
        ele.style.color = colors[index % colors.length];
    });

    // Select the first <form> element on the page
    const form = document.querySelector("form");

    // Select all radio buttons with name="gender"
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    // Select the <select> dropdown for division
    const divisionSelect = form.querySelector("select");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (e) {
        // Prevent the default form submission (which would reload the page)
        e.preventDefault();

        // Get the value of the text input (user's name) and trim spaces
        const name = form.querySelector('input[type="text"]').value.trim();

        // Get the value of the email input and trim spaces
        const email = form.querySelector('input[type="email"]').value.trim();

        // Check if either name or email is empty
        if (name === "" || email === "") {
            // Alert the user if required fields are missing
            alert("Please fill all required fields");
            return; // Exit the function early
        }

        // Initialize gender as an empty string
        let gender = "";

        // Loop through the gender radio buttons
        genderInputs.forEach((input) => {
            // If this radio button is selected (checked)
            if (input.checked) {
                // Set gender to the value of the selected radio input
                gender = input.value;
            }
        });

        // If no gender was selected
        if (gender === "") {
            alert("Please select a gender.");
            return; // Exit the function
        }

        // Get the selected value from the division dropdown
        const division = divisionSelect.value;

        // Check if the selected gender is Male and division is Army
        if (gender === "Male" && division === "Army") {
            // Show a custom message for this specific combination
            alert(`Army suits your profile, ${name}`);
        } else {
            // Default message for other combinations
            alert(`Thank you for applying, ${name}`);
        }
    });
});
