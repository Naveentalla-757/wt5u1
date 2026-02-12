function generateRandom() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max)) {
        alert("Please enter both minimum and maximum values");
        return;
    }

    if (min > max) {
        alert("Minimum value should be less than maximum value");
        return;
    }

    // Original logic for random number generation
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("output").innerHTML = randomNumber;
}
