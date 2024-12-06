const container = document.querySelector("#container");
container.classList.add("mainContainer");

    const screen = document.createElement("div");
    screen.classList.add("screen");
    container.appendChild(screen);

        const input1stNum = document.createElement("div");
        input1stNum.classList.add("input");
        screen.appendChild(input1stNum);

        const inputOperator = document.createElement("div");
        inputOperator.classList.add("input");
        screen.appendChild(inputOperator);

        const input2ndNum = document.createElement("div");
        input2ndNum.classList.add("input");
        screen.appendChild(input2ndNum);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    container.appendChild(buttonContainer);

        const buttonRowTop = document.createElement("div");
        buttonRowTop.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRowTop);

            const button1 = document.createElement("div");
            button1.classList.add("button");
            buttonRowTop.appendChild(button1);

            const button2 = document.createElement("div");
            button2.classList.add("button");
            buttonRowTop.appendChild(button2);

            const button3 = document.createElement("div");
            button3.classList.add("button");
            buttonRowTop.appendChild(button3);
        
            const buttonAdd = document.createElement("div");
            buttonAdd.classList.add("button");
            buttonRowTop.appendChild(buttonAdd);

        const buttonRow2 = document.createElement("div");
        buttonRow2.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow2);

            const button4 = document.createElement("div");
            button4.classList.add("button");
            buttonRow2.appendChild(button4);

            const button5 = document.createElement("div");
            button5.classList.add("button");
            buttonRow2.appendChild(button5);

            const button6 = document.createElement("div");
            button6.classList.add("button");
            buttonRow2.appendChild(button6);
        
            const buttonMinus = document.createElement("div");
            buttonMinus.classList.add("button");
            buttonRow2.appendChild(buttonMinus);

        const buttonRow3 = document.createElement("div");
        buttonRow3.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow3);

            const button7 = document.createElement("div");
            button7.classList.add("button");
            buttonRow3.appendChild(button7);

            const button8 = document.createElement("div");
            button8.classList.add("button");
            buttonRow3.appendChild(button8);

            const button9 = document.createElement("div");
            button9.classList.add("button");
            buttonRow3.appendChild(button9);
        
            const buttonMultiply = document.createElement("div");
            buttonMultiply.classList.add("button");
            buttonRow3.appendChild(buttonMultiply);

        const buttonRow4 = document.createElement("div");
        buttonRow4.classList.add("buttonRow");
        buttonContainer.appendChild(buttonRow4);

            const button0 = document.createElement("div");
            button0.classList.add("button");
            buttonRow4.appendChild(button0);

            const buttonDecimal = document.createElement("div");
            buttonDecimal.classList.add("button");
            buttonRow4.appendChild(buttonDecimal);

            const buttonEqual = document.createElement("div");
            buttonEqual.classList.add("button");
            buttonRow4.appendChild(buttonEqual);
        
            const buttonDivide = document.createElement("div");
            buttonDivide.classList.add("button");
            buttonRow4.appendChild(buttonDivide);
            
const a 
const operator
const b 

const add = function(a, b) {
    return a + b; 
  };
  
  const subtract = function(a, b) {
      return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  }

  const divide = function (a, b) {
    return a / b;
  }