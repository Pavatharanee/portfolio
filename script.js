// Welcome message in the browser console
console.log("Welcome to Pavatharanee's Portfolio!");

// Add a small effect when project cards are clicked
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("selected");

    });

});