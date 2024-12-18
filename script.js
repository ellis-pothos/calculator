let display = [];

const firstNumber = [];
let operator = [];
const secondNumber = [];

function updateDisplay() {
    const displayAsString = display.join("");
    screen.textContent = displayAsString;  
    return displayAsString; 
}

function clearAll() {
    clearDisplay();
    firstNumber.length = 0;
    secondNumber.length = 0; 
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

        const buttonClear = document.createElement("button");
        buttonClear.classList.add("buttonClear");
        buttonClear.textContent = "CLEAR ALL";

            buttonClear.addEventListener(`click`, () => {
                clearAll()
            })
            buttonContainer.appendChild(buttonClear);
    
        const buttonRowTop = document.createElement("div");
        buttonRowTop.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRowTop);

            const button1 = document.createElement("button");
            button1.classList.add("button");
            button1.textContent = "1";
 
                button1.addEventListener(`click`, () => {
                    if (operator.length === 0) {
                        clearAll();
                        display.push("1");
                        updateDisplay();
                    } else if (operator.length > 0){
                       display.push("1");
                        updateDisplay(); 
                    }
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
                        firstNumber.push(parseFloat(display.join('')));
                        clearDisplay();
                        operator.push("+");                        
                    } else if (operator.length > 0) {                                          
                        secondNumber.push(parseFloat(display.join('')));
                        clearDisplay();
                        operate();
                        secondNumber.length = 0; 
                        firstNumber.length = 0; 
                        
                        firstNumber.push(parseFloat(display.join('')));
                        operator.length = 0; 
                        operator.push("+");
                        updateDisplay();
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
                        firstNumber.push(parseFloat(display.join('')));
                        clearDisplay();
                        operator.push("-");                        
                    } else if (operator.length > 0) {                                          
                        secondNumber.push(parseFloat(display.join('')));
                        operate();
                        clearDisplay();
                        secondNumber.length = 0; 
                        firstNumber.length = 0; 
                        
                        firstNumber.push(parseFloat(display.join('')));
                        operator.length = 0; 
                        operator.push("-");
                        updateDisplay();
                        display.length = 0; 
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
                        firstNumber.push(parseFloat(display.join('')));
                        clearDisplay();
                        operator.push("x");                        
                    } else if (operator.length > 0) {                                          
                        secondNumber.push(parseFloat(display.join('')));
                        operate();
                        clearDisplay();
                        secondNumber.length = 0; 
                        firstNumber.length = 0; 
                        
                        firstNumber.push(parseFloat(display.join('')));
                        operator.length = 0; 
                        operator.push("x");
                        updateDisplay();
                        display.length = 0; 
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

            const buttonDecimal = document.createElement("button");
            buttonDecimal.classList.add("button");
            buttonDecimal.textContent = ".";

                buttonDecimal.addEventListener(`click`, () => {
                    if (display.includes(".")) {
 
                    } else {
                    display.push(".");
                    updateDisplay(); 
                    }
                });
                buttonRow4.appendChild(buttonDecimal);

            const buttonEqual = document.createElement("button");
            buttonEqual.classList.add("button");
            buttonEqual.textContent = "=";

                buttonEqual.addEventListener(`click`, () => {
                    secondNumber.push(parseFloat(display.join('')));
                    clearDisplay();
                    operate();

                    firstNumber.length = 0; 
                    secondNumber.length = 0; 

                    updateDisplay();
                    firstNumber.push(display[0]);
                });     
            buttonRow4.appendChild(buttonEqual);
        
            const buttonDivide = document.createElement("button");
            buttonDivide.classList.add("button");
            buttonDivide.textContent = "%";

                buttonDivide.addEventListener(`click`, () => {
                    if (operator.length === 0) {
                        firstNumber.push(parseFloat(display.join('')));
                        clearDisplay();
                        operator.push("/");                        
                    } else if (operator.length > 0) {                                          
                        secondNumber.push(parseFloat(display.join('')));
                        operate();
                        clearDisplay();
                        secondNumber.length = 0; 
                        firstNumber.length = 0; 
                        
                        firstNumber.push(parseFloat(display.join('')));
                        operator.length = 0; 
                        operator.push("/");
                        updateDisplay();
                        display.length = 0; 
                    }
                });
            buttonRow4.appendChild(buttonDivide);
                
         
const operate = function() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
        
        if (operator.length === 1) {
        // const operatorAsString = operator.join("");

            if (operator[0] === "+") {
                let result = a + b;
                display.push(result);
                updateDisplay();
                firstNumber.length = 0;
                secondNumber.length = 0; 
                firstNumber.push(result);
                operator.length = 0;
            } else if (operator[0] === "-") {
                let result = a - b;
                display.push(result);
                updateDisplay();
                firstNumber.length = 0;
                secondNumber.length = 0; 
                firstNumber.push(result);
                operator.length = 0;
            } else if (operator[0] === "/") {
                let result = (a / b);
                display.push(result);
                updateDisplay();
                firstNumber.length = 0;
                secondNumber.length = 0; 
                firstNumber.push(result);
                operator.length = 0;
            } else if (operator[0] === "x") {
                let result = (a * b);
                display.push(result);
                updateDisplay();
                firstNumber.length = 0;
                secondNumber.length = 0; 
                firstNumber.push(result);
                operator.length = 0;
            } else {
                let result = "ERROR";
                display.push(result);
                updateDisplay();
                firstNumber.length = 0; 
                secondNumber.length = 0; 
            }  
        // } else if (operator.length > 1){
        //     const operatorAsString = operator[operator.length - 1];
            
        //     let b = parseFloat(secondNumber);
            
        //     if (operatorAsString === "+") {
        //         let result = a + b;
        //         display.push(result);
        //         updateDisplay();
        //     } else if (operatorAsString === "-") {
        //         let result = a - b;
        //         display.push(result);
        //         updateDisplay();
        //     } else if (operatorAsString === "/") {
        //         let result = (a / b);
        //         display.push(result);
        //         updateDisplay();
        //     } else if (operatorAsString === "x") {
        //         let result = (a * b);
        //         display.push(result);
        //         updateDisplay();
                
        //     } else {
        //         let result = "ERROR";
        //         display.push(result);
        //         updateDisplay();
        //     }
        } 
  }; 