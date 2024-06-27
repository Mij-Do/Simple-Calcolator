// Calculate Program

// const display = document.getElementById("display");


// function click(input){
//      display.value += input;
// }

 

// function clear() {          
//      display.value = "";  
// }



// function calculate(){
//     try{
//      display.value = eval(display.value);
//     }
//     catch(error){ 
//      display.value = "Error";
//     }
// }

function equ(){
     var eq = eval(document.getElementById('display').value)
     document.getElementById('display').value=eq;
}
