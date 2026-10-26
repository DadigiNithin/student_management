
function add() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name == "" || roll == "") {
        alert("Enter all details");
    } else {
        let li = document.createElement("li");
        li.innerHTML = name + " - " + roll;
        document.getElementById("list").appendChild(li);
    }
}
