let display = [];

const firstNumber = [];
let operator = [];
const secondNumber = [];

function updateDisplay() {
    const displayAsString = display.join("");
    screen.textContent = displayAsString;  
    return displayAsString; 
}

function clearDisplay() {
    display.length = 0;
    screen.textContent = "";
}

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
                    display.push("2")
                    updateDisplay();
                });
            buttonRowTop.appendChild(button2);

            const button3 = document.createElement("button");
            button3.classList.add("button");
            button3.textContent = "3";

                button3.addEventListener(`click`, () => {
                    display.push("3")
                    updateDisplay();
                });
            buttonRowTop.appendChild(button3);
        
            const buttonAdd = document.createElement("button");
            buttonAdd.classList.add("button");
            buttonAdd.textContent = "+";

                buttonAdd.addEventListener(`click`, () => {
                    if (operator.length === 0) {
                        const displayAsString = display.join("");
                        firstNumber.push(displayAsString);
                        clearDisplay();
                        operator.push("+");                        
                    } else if (operator.length > 0) {                                          
                        const displayAsString = display.join("");
                        secondNumber.push(displayAsString);
                        clearDisplay();
                        operate();

                        const resultAsString = display.join("");
                        firstNumber.push(resultAsString);

                        operator.push("+");
                        updateDisplay();
                        console.log("first number is " + firstNumber);
                        console.log("second number is " + secondNumber);
                        display.length = 0; 
                    }
                });
            buttonRowTop.appendChild(buttonAdd);

        const buttonRow2 = document.createElement("div");
        buttonRow2.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow2);

            const button4 = document.createElement("button");
            button4.classList.add("button");
            button4.textContent = "4";

                button4.addEventListener(`click`, () => {
                    display.push("4");
                    updateDisplay();
                });
            buttonRow2.appendChild(button4);

            const button5 = document.createElement("button");
            button5.classList.add("button");
            button5.textContent = "5";

                button5.addEventListener(`click`, () => {
                    display.push("5");
                    updateDisplay();
                });
            buttonRow2.appendChild(button5);

            const button6 = document.createElement("button");
            button6.classList.add("button");
            button6.textContent = "6";

                button6.addEventListener(`click`, () => {
                    display.push("6");
                    updateDisplay();
                });
            buttonRow2.appendChild(button6);
        
            const buttonMinus = document.createElement("button");
            buttonMinus.classList.add("button");
            buttonMinus.textContent = "-";

                buttonMinus.addEventListener(`click`, () => {
                    if (operator.length === 0) {
                        const displayAsString = display.join("");
                        firstNumber.push(displayAsString);
                        operator.push("-");
                        clearDisplay();     
                    } else if (operator.length > 0) {
                        const displayAsString = display.join("");
                        secondNumber.push(displayAsString);
                        operator.push("-");   
                        clearDisplay();
                        operate();                        
                    }
                });
            buttonRow2.appendChild(buttonMinus);

        const buttonRow3 = document.createElement("div");
        buttonRow3.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow3);

            const button7 = document.createElement("button");
            button7.classList.add("button");
            button7.textContent = "7";

                button7.addEventListener(`click`, () => {
                    display.push("7");
                    updateDisplay();
                });
            buttonRow3.appendChild(button7);

            const button8 = document.createElement("button");
            button8.classList.add("button");
            button8.textContent = "8";

                button8.addEventListener(`click`, () => {
                    display.push("8");
                    updateDisplay();
                });
            buttonRow3.appendChild(button8);

            const button9 = document.createElement("button");
            button9.classList.add("button");
            button9.textContent = "9";

                button9.addEventListener(`click`, () => {
                    display.push("9");
                    updateDisplay();
                });
            buttonRow3.appendChild(button9);
        
            const buttonMultiply = document.createElement("button");
            buttonMultiply.classList.add("button");
            buttonMultiply.textContent = "x";

                buttonMultiply.addEventListener(`click`, () => {
                    if (operator.length === 0) {
                        const displayAsString = display.join("");
                        firstNumber.push(displayAsString);
                        clearDisplay();
                        operator.push("x");                        
                    } else if (operator.length > 0) {
                        const displayAsString = display.join("");
                        secondNumber.push(displayAsString);
                        operator.push("x");   
                        clearDisplay();
                        operate();                        
                    }
                });
            buttonRow3.appendChild(buttonMultiply);

        const buttonRow4 = document.createElement("div");
        buttonRow4.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow4);

            const button0 = document.createElement("button");
            button0.classList.add("button");
            button0.textContent = "0";

                button0.addEventListener(`click`, () => {
                    display.push("0");
                    updateDisplay();
                });
            buttonRow4.appendChild(button0);

            const buttonClear = document.createElement("button");
            buttonClear.classList.add("button");
            buttonClear.textContent = "CLR";

                buttonClear.addEventListener(`click`, () => {
                    clearDisplay();
                })
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
                    if (operator.length === 0) {
                        const displayAsString = display.join("");
                        firstNumber.push(displayAsString);
                        clearDisplay();
                        operator.push("/");                        
                    } else if (operator.length > 0) {
                        const displayAsString = display.join("");
                        secondNumber.push(displayAsString);
                        operator.push("/");   
                        clearDisplay();
                        operate();                        
                    }
                });
            buttonRow4.appendChild(buttonDivide);
                
         
const operate = function() {
    let a = Number(firstNumber);
    let b = Number(secondNumber);
        
        if (operator.length === 1) {
        const operatorAsString = operator.join("");

        if (operatorAsString === "+") {
            let result = a + b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0; 
            secondNumber.length = 0; 
        } else if (operatorAsString === "-") {
            let result = a - b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0; 
            secondNumber.length = 0; 
        } else if (operatorAsString === "/") {
            let result = a / b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0; 
            secondNumber.length = 0; 
        } else if (operatorAsString === "x") {
            let result = a * b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0; 
            secondNumber.length = 0; 
        } else {
            let result = "ERROR";
            display.push(result);
            updateDisplay();
            firstNumber.length = 0; 
            secondNumber.length = 0; 
        }
    } else if (operator.length > 1){
        const operatorAsString = operator[operator.length - 1];
        console.log("first number is now the same as the previous result: " + firstNumber);
        console.log("second number is now the same as display: " + secondNumber);
        
        let b = Number(secondNumber);
        
        if (operatorAsString === "+") {
            let result = a + b;
            display.push(result);
            updateDisplay();
            firstNumber.push(result);
            firstNumber.length = 0;
        } else if (operatorAsString === "-") {
            let result = a - b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0;
            firstNumber.push(result);
            display.length = 0; 
            secondNumber.length = 0;
        } else if (operatorAsString === "/") {
            let result = a / b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0;
            firstNumber.push(result);
            display.length = 0; 
            secondNumber.length = 0;
        } else if (operatorAsString === "x") {
            let result = a * b;
            display.push(result);
            updateDisplay();
            firstNumber.length = 0;
            firstNumber.push(result);
            display.length = 0; 
            secondNumber.length = 0;
        } else {
            let result = "ERROR";
            display.push(result);
            updateDisplay();
        }
    }
  }; 