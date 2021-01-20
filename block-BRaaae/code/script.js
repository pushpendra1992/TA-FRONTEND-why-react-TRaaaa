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


let elm = React.createElement;

function createUi(arr) {
    //ul.innerHTML = '';
    let ui = arr.map(element => {

        let li = elm("li", {
            className: "watch-movie-item",
        }, element.name, elm('a', {}, element.toWatch ? "watched" : "Towatch"));
        return li;
    });
    ReactDOM.render(ui, ul)
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
