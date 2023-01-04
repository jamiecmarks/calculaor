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
