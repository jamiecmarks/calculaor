    // required functions!!
        // add
        // subtract
        // multiply
        // divide

    function add( a, b) {
        return a + b
    }

    function subtract ( a,b ) {
        return a - b
    }

    function multiply ( a, b ) {
        return a * b 
    }

    function divide ( a, b ) {
        if ( b == 0 ) return "ERROR" 
        
        return a / b
    }

    function operate ( operator, a , b) {
        switch (operator) {
            case "+":
                return add( a, b )
                break;
            case "-":
                return subtract( a, b )
                break;

            case "x":
                return multiply( a, b )
                break;
            
            case "/": 
                return divide( a, b )
                break;


        }

    }


const number = document.querySelectorAll('.number, .clear');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals')

let a, b, operator

number.forEach( (item) =>  {
    item.addEventListener('click', (e) => {
        if (e.target.classList == 'clear') {
            display.textContent = '';
        } else { 
        display.textContent += e.target.textContent
        }
    })
})

operators.forEach( (item) => {
    item.addEventListener("click", (e) => {
        a = +display.textContent;
        display.textContent = '';
        operator = e.target.textContent;
    })
} )

equals.addEventListener('click', (e) => {
    b = +display.textContent;

} )
