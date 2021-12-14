const navOne_listItems = document.querySelectorAll(".navigation_one .list");
const navTwo_listItems = document.querySelectorAll(".navigation_two .list");

const inpBox = document.querySelector(".input");
const inputField = document.querySelector(".input input");
const inputOptionElements = document.querySelectorAll(".option div");

let $ = (element, eventType, fns) => element.addEventListener(eventType, fns);

function activeLinkOne () {
    navOne_listItems.forEach(item =>{
        item.classList.remove("active");
        this.classList.add("active");
    })
}

function activeLinkTwo () {
    navTwo_listItems.forEach(item =>{
        item.classList.remove("active");
        this.classList.add("active");
    })
}

navOne_listItems.forEach(item => $(item, "click", activeLinkOne));

navTwo_listItems.forEach(item => {
    $(item, "click", activeLinkTwo);
})

inpBox.onclick = function () {
    inpBox.classList.toggle("active");
}

function insertValue () {
    inputField.value = this.getAttribute("data-value");
}

inputOptionElements.forEach(elem => $(elem, "click", insertValue));
