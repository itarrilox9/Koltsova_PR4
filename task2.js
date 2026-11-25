function convertMiles() {
    let miles = parseFloat(document.getElementById('miles').value);
    if (isNaN(miles)) {
        document.getElementById('result').innerText = "Введите корректное число!";
        return;
    }
    let km = (miles * 1852) / 1000;
    document.getElementById('result').innerText = `Расстояние в километрах: ${km.toFixed(3)} км`;
}
