let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];

function handler(event) {
    if (form.elements.text.value !== "") {
        event.preventDefault();
        let watchList = {
            name: form.elements.text.value,
            toWatch: false,
        };
        userInfo.push(watchList);
        form.elements.text.value = '';
        createUi(userInfo);
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function elm(type, attr = {}, ...children) {
    let element = document.createElement(type);
    for (let key in attr) {
        if (key.startsWith("data-")) {
            element.setAttribute(key, attr[key]);
        } else {
            element[key] = attr[key];
        }
    }
    children.forEach((child) => {
        if (typeof child === "object") {
            element.append(child);
        }
        if (typeof child === "string") {
            let node = document.createTextNode(child);
            element.append(node);
        }
    });
    return element;
}


function createUi(arr) {
    ul.innerHTML = '';
    arr.forEach(element => {

        let li = elm("li", {
            className: "watch-movie-item",
        }, element.name, elm('a', {}, element.toWatch ? "watched" : "Towatch"));
        ul.append(li);
    });
}

function watched(event) {
    let index = [...document.querySelectorAll('li')].indexOf(event.target.parentElement);
    userInfo[index].toWatch = !userInfo[index].toWatch;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    createUi(userInfo);
}

createUi(userInfo);

form.addEventListener('submit', handler);
ul.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {
        watched(e)
    }
})
