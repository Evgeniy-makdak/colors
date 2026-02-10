const rows = 3;
const cols = 3;
const colors = ["red", "green", "blue"];

const table = document.querySelector("#field");

function randomColors() {
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr)
        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            tr.appendChild(td);
            td.classList.add(colors[(Math.floor(Math.random() * colors.length))]);
        }
    }
}
randomColors()
