const rows = 3;
const cols = 3;
const colors = ["red", "green", "blue"];
const table = document.querySelector("#field");

// Создаем пустой массив для хранения цветов всех ячеек
const cellColors = [];

function randomColors() {
    // Очищаем массив на случай, если функция вызовется снова
    cellColors.length = 0;
    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        
        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            tr.appendChild(td);
            
            // Генерируем случайный цвет
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            td.classList.add(randomColor);
            
            // Вычисляем индекс для одномерного массива
            const flatIndex = i * cols + j;
            
            // Сохраняем цвет в массив
            cellColors[flatIndex] = randomColor;
            
            console.log(`Ячейка [${i}][${j}] имеет индекс ${flatIndex} и цвет ${randomColor}`);
            
            td.addEventListener('click', function changeColor() {
                // Здесь будем обновлять и ячейку, и массив
                let currentClass = td.classList[0];
                const currentIndex = colors.indexOf(currentClass);
                let nextIndex = (currentIndex + 1) % colors.length;
                
                td.classList.remove(currentClass);
                td.classList.add(colors[nextIndex]);
                
                // И обновлять массив cellColors для этого flatIndex
            });
        }
    }
}

randomColors();
