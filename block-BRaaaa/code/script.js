// Create a list item clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myMovie").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write a moie name !");
    } else {
        document.getElementById("myMovieList").appendChild(li);
    }
    document.getElementById("myMovie").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("To Watch");
    span.className = "watchList";
    span.appendChild(txt);
    li.appendChild(span);
}