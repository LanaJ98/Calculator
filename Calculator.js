
let display = document.getElementById('display');
let buttons = document.getElementsByClassName('button'); 
let operation = document.getElementsByClassName('operator');

Array.from(buttons).forEach((element) => { 
    element.addEventListener('click', function(event){ 
       
        switch(event.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                if (display.innerText.slice(-1) == operation)
                display.innerText = "Error";
                else (display.innerText = eval(display.innerText))
                break;
            default:
                display.innerHTML += event.target.innerHTML; 
        }
    });
});

   