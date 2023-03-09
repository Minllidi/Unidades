const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

//crear variables 
const loggetInputs = document.querySelectorAll(".card");
export const loginCheck = (user) => {
    if (user) {
        loggedInLinks.forEach((link) => (link.style.display = "block"));
        loggedOutLinks.forEach((link) => (link.style.display = "none"));
        //agregar
        loggetInputs.forEach((div) => (div.style.display = "block"));
    } else {
        loggedInLinks.forEach((link) => (link.style.display = "none"));
        loggedOutLinks.forEach((link) => (link.style.display = "block"));
        //agregar
        loggetInputs.forEach((div) => (div.style.display = "none"));
    }
};
