// declare id/class variables
const helloTag = document.querySelector(".helloTag");
const button1Id = document.querySelector("#button1Id");

// add event listener and function to button.
button1Id.addEventListener("click",
function (event) {
    helloTag.innerHTML="Goodbye world";
})