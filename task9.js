function calcLeg() {
    let c = parseFloat(document.getElementById('hypotenuse').value);
    if (isNaN(c) || c <= 0) {
        document.getElementById('result').innerText = "Введите положительное число!";
        return;
    }
    let a = c / Math.sqrt(2);
    document.getElementById('result').innerText = `Длина катета: ${a.toFixed(2)}`;
}
