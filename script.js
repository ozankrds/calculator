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
                // What this pretty long line of code does is that it deletes the last character of the screen.
                // If its length is one like 7, it becomes 0 when clicked
                // If the last index of the screen is space, it deletes the space and the character that follows it.
                // If the last two index is space caused by pressing the operators followingly, it deletes two spaces and the character that follows them
                (screen.innerHTML.length === 1) 
                    ? screen.innerHTML = "0" 
                    : (screen.innerHTML.charAt(screen.innerHTML.length - 1) === " " && screen.innerHTML.charAt(screen.innerHTML.length - 2) === " ") 
                        ? screen.innerHTML =  screen.innerHTML.substring(0, screen.innerHTML.length - 3) 
                        : (screen.innerHTML.charAt(screen.innerHTML.length - 1) === " ") 
                            ? screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 2)
                            : screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);

                // Prevents a possible bug
                if(screen.innerHTML === "")
                    screen.innerHTML = "0";
                
                calculation = calculation.substring(0, calculation.length - 1);
                break;
            case "×":
                calculation += "*";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += " × ";
                break;
            case "÷":
                calculation += "/";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += " ÷ ";
                break;
            case "+":
                calculation += "+";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += " + ";
                break;
            case "−":
                calculation += "-";
                (screen.innerHTML === "0") ? screen.innerHTML === "0" : screen.innerHTML += " − ";
                break;
            case "=":
                calculation = eval(calculation);
                try {
                    calculation = eval(calculation);
                    screen.innerHTML = Math.round(calculation * 100000000000) / 100000000000;
                } catch(error) {
                    alert("Syntax Error");
                    screen.innerHTML = "0";
                    calculation = "";
                }
                break;
            default:
                (screen.innerHTML === "0") ? screen.innerHTML = buttonArr[i].innerHTML : screen.innerHTML += buttonArr[i].innerHTML;
                calculation += buttonArr[i].innerHTML;
                break;
        }
    })
}
