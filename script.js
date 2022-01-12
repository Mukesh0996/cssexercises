const navOne_listItems = document.querySelectorAll(".navigation_one .list");
const navTwo_listItems = document.querySelectorAll(".navigation_two .list");

const inpBox = document.querySelector(".input");
const inputField = document.querySelector(".input input");
const inputOptionElements = document.querySelectorAll(".option div");
const search_container = document.querySelector(".search_container");
const search_container_Input = document.querySelector(".search_container input");

const drag = document.querySelector(".drag");
let $ = (element, eventType, fns) => element.addEventListener(eventType, fns);

function activeLinkOne () {
    navOne_listItems.forEach(item => {
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

$(search_container, "click", function (e) {
    if(e.currentTarget.classList.contains("activate")) {
       return;
    } else {
        e.currentTarget.classList.add("activate");
    }
});

function moveElement (e) {
    let getStyle = window.getComputedStyle(drag);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    drag.style.left = `${leftVal + e.movementX}px`;
    drag.style.top = `${topVal + e.movementY}px`;
}


drag.addEventListener("mousedown", ()=> {
    drag.addEventListener("mousemove", moveElement)
});

document.addEventListener("mouseup", () => {
    drag.removeEventListener("mousemove", moveElement);
});

document.addEventListener("mousedown", (e) => {
    if(e.target ===search_container_Input || e.target === search_container) {
        return
    }
    if(search_container_Input.value !== "") {
        return;
    } else if (search_container_Input.value === "") {
        search_container.classList.remove("activate");
    }
})