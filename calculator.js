console.log("calculator.js");

let displayScreen = document.getElementById('displayScreen');
// let btn = document.getElementsByClassName('btn');
let btn = Array.from(document.getElementsByClassName('btn'));

console.log(btn);

btn.map(btn =>{
    btn.addEventListener('click', (e) =>{
       
        // console.log('clicked on',e);
        // console.log('clicked on',e.target);
        console.log('clicked on',e.target.innerText);
      let selectedChar = e.target.innerText  
        switch (selectedChar) {
            case '=':
                displayScreen.innerText = eval(displayScreen.innerText);
                break;   

            case 'C':
                displayScreen.innerText = '';
                break;
            case '←':
                displayScreen.innerText = displayScreen.innerText.slice(0,-1);
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
                displayScreen.innerText = Math.pow(10,displayScreen.innerText);
                break;    
            case 'n!':
                let ans=1;
                if(displayScreen.innerText == 0 || displayScreen.innerText == 1){
                    ans=1;
                    displayScreen.innerText = ans;
                }else{
                    for (let i = displayScreen.innerText; i >= 1; i--) {
                       ans = ans * i;   
                    }
                    displayScreen.innerText = ans;
                } 
                break;                
            default:
                displayScreen.innerText += selectedChar
                break;
        }
    });
});


// for(var i=0;i<btn.length;i+=1){
//     if(btn[i].innerHTML === '='){
//           btn[i].addEventListener("click", calculate(i));
//     }
// }


// clear.onclick = function () {
// screen.innerHTML = '';
// }; 
// function calculate(i) {
//     return function () {
//         screen.innerHTML = eval(screen.innerHTML);
//     };
//   }

 //   if (selectedChar == true) {
    //     displayScreen.innerText += selectedChar
    //     if (selectedChar == 'C') {
    //         displayScreen.innerText = '';
    //     }else if(selectedChar == '='){
    //         displayScreen.innerText = eval(displayScreen.innerText);
    //     }else if(selectedChar == '←'){
    //         displayScreen.innerText = displayScreen.innerText.slice(0,-1);
    //     }

    //   }




//if I enter wrong data it is not showing err how to do that