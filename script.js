//=========================================
// For The Theme Switching
//=========================================
var ball_1 = document.querySelector(".ball_1");
var ball_2 = document.querySelector(".ball_2");
var ball_3 = document.querySelector(".ball_3");

ball_1.onclick = ()=>{
	document.body.classList.remove("theme_3");
	document.body.classList.remove("theme_2");
	ball_1.classList.add("active");
	ball_2.classList.remove("active");
	ball_3.classList.remove("active");
}
ball_2.onclick = ()=>{
	document.body.classList.remove("theme_3");
	document.body.classList.add("theme_2");
	ball_1.classList.remove("active");
	ball_2.classList.add("active");
	ball_3.classList.remove("active");
}
ball_3.onclick = ()=>{
	document.body.classList.add("theme_3");
	ball_1.classList.remove("active");
	ball_2.classList.remove("active");
	ball_3.classList.add("active");
}

//=========================================
// For Math Calculation
//=========================================
var screen = document.querySelector(".screen");
var reset = document.querySelector(".reset");

// Resetting the screen
reset.onclick = ()=> {
	screen.value = "";
}

// Getting the Number
function getNumber(num){

	switch(num){
	    case 1:
	        screen.value += '1'; 
	        break;
	    case 2:
	        screen.value += '2'; 
	        break;
	    case 3:
	        screen.value += '3'; 
	        break;
	    case 4:
	        screen.value += '4'; 
	        break;
	    case 5:
	        screen.value += '5'; 
	        break;
	    case 6:
	        screen.value += '6'; 
	        break;
	    case 7:
	        screen.value += '7'; 
	        break;
	    case 8:
	        screen.value += '8'; 
	        break;      
	    case 9:
	        screen.value += '9'; 
	        break;   
	    case 0:
	        screen.value += '0'; 
	        break;                             
	}
 
} 

// Getting The Operand Symbor
function getOperand(operand){

	switch(operand){
	    case '+':
	        screen.value += '+'; 
	        break;
	    case '-':
	        screen.value += '-'; 
	        break;
	    case '/':
	        screen.value += '/'; 
	        break;
	    case 'x':
	        screen.value += '*'; 
	        break;
	    case '.':
	        screen.value += '.'; 
	        break;
	}
 
} 

// deleting a value in the screen
function del(){
    var x = screen.value;
    if (x.length > 0){
	    x = x.substring(0, x.length-1);
	    screen.value = x;
	}
}

// Getting the answer to the number or value u compute
function compute() {
   ans = Math.floor(+eval(screen.value));
   screen.value = ans;
}
