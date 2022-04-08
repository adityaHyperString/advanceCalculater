
const displayScreen = document.getElementById('displayScreen');
const btn = Array.from(document.getElementsByClassName('btn'));

//map function for calling every element from btn array
btn.map(btn => {
    btn.addEventListener('click', (e) => {

        let selectedChar = e.target.innerText.toLowerCase();
        // switch cases for perticular symbols from calculator
        switch (selectedChar) {
            case '=':
                try {
                    displayScreen.innerText = eval(displayScreen.innerText);
                } catch (error) {
                    alert('please enter proper values');
                    displayScreen.innerText = '';
                }
                break;

            case 'c':
                displayScreen.innerText = '';
                break;
            case '←':
                displayScreen.innerText = displayScreen.innerText.slice(0, -1);
                break;
            case 'x2':
                displayScreen.innerText = (displayScreen.innerText * displayScreen.innerText);
                break;
            case '√':
                displayScreen.innerText = Math.sqrt(displayScreen.innerText);
                break;
            case 'π':
                let pieValue = 3.14159265359
                displayScreen.innerText += pieValue;
                break;
            case 'log':
                displayScreen.innerText = Math.log(displayScreen.innerText);
                break;
            case 'sin':
                displayScreen.innerText = Math.sin(displayScreen.innerText);
                break;
            case 'cos':
                displayScreen.innerText = Math.cos(displayScreen.innerText);
                break;
            case 'tan':
                displayScreen.innerText = Math.tan(displayScreen.innerText);
                break;
            case '10x':
                displayScreen.innerText = Math.pow(10, displayScreen.innerText);
                break;
            case 'n!':
                let ans = 1;
                if (displayScreen.innerText == 0 || displayScreen.innerText == 1) {
                    ans = 1;
                    displayScreen.innerText = ans;
                } else {
                    for (let i = displayScreen.innerText; i >= 1; i--) {
                        ans = ans * i;
                    }
                    displayScreen.innerText = ans;
                }
                break;
            default:
                //to check whether user is enter valid operations
                if (displayScreen.innerText == '') {
                    if (btn.innerText == '/' || btn.innerText == '*' || btn.innerText == '%') {
                        alert('please enter value first')
                    } else {

                        displayScreen.innerText += selectedChar
                    }
                } else {
                    displayScreen.innerText += selectedChar
                }
                break;
        }
    });
});


