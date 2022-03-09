function mathOperation() {
    let display = document.getElementById("display").value;

    if (display.length == 0) {
        result = "Please enter a number";
    } else {
        result = eval(display);
    }

    showResult(result);
}

function showResult(result) {
    let container = document.getElementById("display");
    container.value = result;

    if (document.getElementById("result") !== null) {
        document.getElementById("result").remove();
        return (container.value = result);
    } else {
        return (container.value = result);
    }
}

document.getElementById("calculate").addEventListener("click", mathOperation);
