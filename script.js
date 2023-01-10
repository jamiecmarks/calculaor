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
        if ( b == 0 ) return "AHHAHHA" 
        
        return a / b
    }

    function operate ( operator, a , b) {
        if ( a == null || b == null || !operator) {
            return "INSUFFICENT INFORMATION"
        }
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
const backspace = document.querySelector('.backspace')

let count = 0;

function populateDisplay ( str ) {
    display.textContent += str;
}

let a, b, operator

backspace.addEventListener( 'click', ( e ) => {
    if ( display.textContent.length > 0  ) {
        display.textContent = display.textContent.slice(0,-1);

    }

} ) 

number.forEach( (item) =>  {
    item.addEventListener('click', (e) => {
        if (e.target.classList == 'clear') {
            display.textContent = '0';
            a = null;
            b = null;
            operator = null;
            count = 0;

            const dot = document.getElementsByClassName(".")
            dot[0].disabled = false;
        } else {
            if (count == 0) {
                display.textContent = e.target.textContent }
                else {
                    populateDisplay(e.target.textContent);
                    if ( e.target.classList[1] == '.' ) {
                        e.target.disabled = true;          
                        
                    }
            }
        
        }

        ++count;
    })
})

operators.forEach( (item) => {
    item.addEventListener("click", (e) => {
        // populateDisplay( `${a} ` )
        a = Number(display.textContent);
        operator = e.target.textContent;
        display.textContent = '';
        const dot = document.getElementsByClassName(".")
        dot[0].disabled = false;
    })
} )

equals.addEventListener('click', (e) => {
    b = Number(display.textContent);
    // alert( typeof(operate( operator, a, b ) ))
    const dot = document.getElementsByClassName(".")
    dot[0].disabled = false;
    if (typeof(operate( operator, a, b ) == 'string')) {
        display.textContent = operate( operator, a, b );
    } else {
        display.textContent = Math.round(operate( operator, a, b )*100) /100;
    }
    a = null;
    b = null;
    operator = null;
    number.forEach( (item) =>  {
        item.addEventListener( 'click', (e) => {
            display.textContent = e.target.textContent;
            item.addEventListener( 'click', (e) => {
                if (e.target.classList == 'clear') {
                    display.textContent = '0';
                    a = null;
                    b = null;
                    operator = null;
                    count = 0;
                } else {
                    if (count == 0) {
                        display.textContent = e.target.textContent }
                        else {
                            populateDisplay(e.target.textContent);
                    }
                    ++count
                }
            } )
        } )
    } )
} )
