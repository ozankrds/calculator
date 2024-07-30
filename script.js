var screen = document.querySelector(".screen");
screen.innerHTML = screen.innerHTML.trim();
let calculation = "";
let buttonArr = document.querySelectorAll("button");

for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", function () {
        switch(buttonArr[i].innerHTML) {
            case "C":
                screen.innerHTML = "0";
                calculation = "";
                break;
            case "←":
                (screen.innerHTML.length === 1) ? screen.innerHTML = "0" : screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
                calculation = calculation.substring(0, calculation.length - 1);
                break;
            case "×":
                calculation += "*";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += "×";
                break;
            case "÷":
                calculation += "/";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += "÷";
                break;
            case "+":
                calculation += "+";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += "+";
                break;
            case "−":
                calculation += "-";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += "−";
                break;
            case "=":
                calculation = eval(calculation);
                screen.innerHTML = calculation;
                break;
            default:
                (screen.innerHTML === "0") ? screen.innerHTML = buttonArr[i].innerHTML : screen.innerHTML += buttonArr[i].innerHTML;
                calculation += buttonArr[i].innerHTML;
                console.log(calculation);
                break;
        }
    })
}