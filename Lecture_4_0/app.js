// Array.of
// const friends = ["nico", "lynn", "dal", "mark"];

// console.log(friends);

// const friends = Array.of("noci", "lynn", "dal", "mark");

// console.log(friends);

// Array.from
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// const buttons = document.getElementsByClassName("btn");
// console.log(buttons);

// const buttons = document.getElementsByClassName("btn");

// buttons.forEach(button => {
//     addEventListener("click", () => console.log("I ve been clicked"));
// });

const buttons = document.getElementsByClassName("btn");

// Array.from(buttons).forEach(button => {
//     button.addEventListener("click", () => console.log("Clicked!!"));
// });

const ar = Array.from(buttons);
ar.forEach(button => {
    button.addEventListener("click", () => console.log("Clicked!!"));
});