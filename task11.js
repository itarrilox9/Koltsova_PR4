function calcSquare() {
    let a = parseFloat(document.getElementById('side').value);
    if (isNaN(a) || a <= 0) {
        document.getElementById('result').innerText = "Введите положительное число!";
        return;
    }
    let perimeter = 4 * a;
    let area = a * a;
    let diagonal = a * Math.sqrt(2);

    document.getElementById('result').innerHTML = 
        `Периметр: ${perimeter.toFixed(2)} <br>` +
        `Площадь: ${area.toFixed(2)} <br>` +
        `Диагональ: ${diagonal.toFixed(2)}`;
}
