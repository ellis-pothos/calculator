let display = [];

function updateDisplay() {
    const displayAsString = display.join("");
    screen.textContent = displayAsString;  
    return displayAsString; 
}

function clearDisplay() {
    display.length = 0;
    screen.textContent = "";
}

const firstNumber = [];
let operator = [];
const secondNumber = [];

const container = document.querySelector("#container");
container.classList.add("mainContainer");

    const screen = document.createElement("div");
    screen.classList.add("screen");
    container.appendChild(screen);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    container.appendChild(buttonContainer);

        const buttonRowTop = document.createElement("div");
        buttonRowTop.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRowTop);

            const button1 = document.createElement("button");
            button1.classList.add("button");
            button1.textContent = "1";
 
                button1.addEventListener(`click`, () => {
                    display.push("1");
                    updateDisplay();
                });
            buttonRowTop.appendChild(button1);                  

            const button2 = document.createElement("button");
            button2.classList.add("button");
            button2.textContent = "2";
                
                button2.addEventListener(`click`, () => {
                    display.push("2");
                });
            buttonRowTop.appendChild(button2);

            const button3 = document.createElement("button");
            button3.classList.add("button");
            button3.textContent = "3";

                button3.addEventListener(`click`, () => {
                    display.push("3");
                });
            buttonRowTop.appendChild(button3);
        
            const buttonAdd = document.createElement("button");
            buttonAdd.classList.add("button");
            buttonAdd.textContent = "+";

                buttonAdd.addEventListener(`click`, () => {
                    const displayAsString = display.join("");
                    firstNumber.push(displayAsString);
                    clearDisplay();
                    operator.push("+");
                });
            buttonRowTop.appendChild(buttonAdd);

        const buttonRow2 = document.createElement("div");
        buttonRow2.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow2);

            const button4 = document.createElement("button");
            button4.classList.add("button");
            button4.textContent = "4";

                button4.addEventListener(`click`, () => {
                    a.push("4");
                });
            buttonRow2.appendChild(button4);

            const button5 = document.createElement("button");
            button5.classList.add("button");
            button5.textContent = "5";

                button5.addEventListener(`click`, () => {
                    a.push("5");
                });
            buttonRow2.appendChild(button5);

            const button6 = document.createElement("button");
            button6.classList.add("button");
            button6.textContent = "6";

                button6.addEventListener(`click`, () => {
                    a.push("6");
                });
            buttonRow2.appendChild(button6);
        
            const buttonMinus = document.createElement("button");
            buttonMinus.classList.add("button");
            buttonMinus.textContent = "-";

                buttonMinus.addEventListener(`click`, () => {
                    buttonMinus.style.backgroundColor = "black";
                    operator.push("-");
                });
            buttonRow2.appendChild(buttonMinus);

        const buttonRow3 = document.createElement("div");
        buttonRow3.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow3);

            const button7 = document.createElement("button");
            button7.classList.add("button");
            button7.textContent = "7";

                button7.addEventListener(`click`, () => {
                    a.push("7");
                });
            buttonRow3.appendChild(button7);

            const button8 = document.createElement("button");
            button8.classList.add("button");
            button8.textContent = "8";

                button8.addEventListener(`click`, () => {
                    a.push("8");
                });
            buttonRow3.appendChild(button8);

            const button9 = document.createElement("button");
            button9.classList.add("button");
            button9.textContent = "9";

                button9.addEventListener(`click`, () => {
                    a.push("9");
                });
            buttonRow3.appendChild(button9);
        
            const buttonMultiply = document.createElement("button");
            buttonMultiply.classList.add("button");
            buttonMultiply.textContent = "x";

                buttonMultiply.addEventListener(`click`, () => {
                    buttonMultiply.style.backgroundColor = "black";
                    operator.push("*");
                });
            buttonRow3.appendChild(buttonMultiply);

        const buttonRow4 = document.createElement("div");
        buttonRow4.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow4);

            const button0 = document.createElement("button");
            button0.classList.add("button");
            button0.textContent = "0";
            buttonRow4.appendChild(button0);

            const buttonClear = document.createElement("button");
            buttonClear.classList.add("button");
            buttonClear.textContent = "CLR";
            buttonRow4.appendChild(buttonClear);

            const buttonEqual = document.createElement("button");
            buttonEqual.classList.add("button");
            buttonEqual.textContent = "=";

                buttonEqual.addEventListener(`click`, () => {
                    const displayAsString = display.join("");
                    secondNumber.push(displayAsString);
                    clearDisplay();
                    operate();
                });     
            buttonRow4.appendChild(buttonEqual);
        
            const buttonDivide = document.createElement("button");
            buttonDivide.classList.add("button");
            buttonDivide.textContent = "%";

                buttonDivide.addEventListener(`click`, () => {
                    buttonDivide.style.backgroundColor = "black";
                    operator.push("/");
                });
            buttonRow4.appendChild(buttonDivide);
                
         
const operate = function() {
    const operatorAsString = operator.join("");
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    if (operatorAsString === "+") {
        let result = a + b;
        screen.textContent = result; 
    } else if (operatorAsString === "-") {
        let result = a - b;
        screen.textContent = result; 
    } else if (operatorAsString === "/") {
        let result = a / b;
        screen.textContent = result; 
    } else if (operatorAsString === "x") {
        let result = a * b;
        screen.textContent = result; 
    } else {
        let result = "ERROR";
        screen.textContent = result; 
    }
  }; 