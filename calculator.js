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