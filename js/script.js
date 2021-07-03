const button = document.querySelector(".submit");
const todoList = document.querySelector(".todo-list");
const todoNr = document.querySelector(".todo-nr b");
const buttonA = document.querySelector(".btn");
const mainSec = document.querySelector("body");
const main2 = document.querySelector("main");
const Item = todoList.children;

main2.addEventListener("click", function () {
    const newItem = document.createElement("li");
    todoList.appendChild(newItem);
    // console.log(newItem);
    todoNr.innerText = Item.length;
    });

buttonA.addEventListener("click", function () {
    if (mainSec.classList.toggle("body")) {
    this.innerHTML = "Dark";
    main2.classList.toggle("main1");
    } else {
        main2.classList.toggle("main2");
        this.innerHTML = "Light";
    }
});