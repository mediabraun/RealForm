console.log("JS loaded.");

const ccbtn = document.getElementById(`ccbtn`);
const dgbtn = document.getElementById("dgbtn");
const gpgbtn = document.getElementById("gpgbtn");
const comp = document.getElementById("comp");
const trash = document.getElementById("trash");

ccbtn.addEventListener("click", () => {
    window.location.href = "/RealForm/templates/calculator.html";
});

dgbtn.addEventListener("click", () => {
    alert("Generating Diet...");
});

gpgbtn.addEventListener("click", () => {
    alert("Generating a Gym Plan...");
});

comp.addEventListener("click", () => {
    document.body.classList.toggle("invert-theme");
    console.log("theme toggled");
});

trash.addEventListener("click", () => {
    document.body.classList.toggle("No Saved Progress Yet!");
});


