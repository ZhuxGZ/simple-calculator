let container = document.getElementById("display");

function mathOperation() {
    if (container.value.length == 0) {
        result = "Please enter a number";
    } else {
        result = eval(container.value);
    }

    showResult(result);
}

function showResult(result) {
    container.value = result;

    if (document.getElementById("result") !== null) {
        document.getElementById("result").remove();
        return (container.value = result);
    } else {
        return (container.value = result);
    }
}

function del() {
    let newstring = container.value.slice(0, -1);
    container.value = newstring;
}
function clear() {
    container.value = "";
}

const numberButtons = document.querySelectorAll("[data-numbers]");
const operationButtons = document.querySelectorAll("[data-operations]");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        container.value += button.innerText;
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        container.value += button.innerText;
    });
});

document.getElementById("del").addEventListener("click", del);
document.getElementById("ac").addEventListener("click", clear);
document.getElementById("equal").addEventListener("click", mathOperation);
