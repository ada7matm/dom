let list = "";
let item;

while (item !== "terminar") {
    item = prompt("Ingrese un item a la lista");
    if (item !== "terminar") {
        list += item + "\n"; 
    }
}

document.getElementById("title").innerText = list;

