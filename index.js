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
    if (container.value === "Please enter a number") {
        container.value = "";
        let newstring = container.value.slice(0, -1);
        container.value = newstring;
    } else {
        let newstring = container.value.slice(0, -1);
        container.value = newstring;
    }
}
function clear() {
    container.value = "";
}

function clearOnClick() {
    if (container.value === "Please enter a number") {
        clear();
    }
}
const numberButtons = document.querySelectorAll("[data-numbers]");
const operationButtons = document.querySelectorAll("[data-operations]");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (container.value === "Please enter a number") {
            container.value = "";
            container.value += button.innerText;
        } else {
            container.value += button.innerText;
        }
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (container.value === "Please enter a number") {
            container.value = "";
            container.value += button.innerText;
        } else {
            container.value += button.innerText;
        }
    });
});

container.addEventListener("click", clearOnClick);
document.getElementById("del").addEventListener("click", del);
document.getElementById("ac").addEventListener("click", clear);
document.getElementById("equal").addEventListener("click", mathOperation);
