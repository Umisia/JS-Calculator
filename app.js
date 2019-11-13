const nums = document.querySelectorAll(".nums");
const viewer = document.querySelector("#viewer");
const ops = document.querySelectorAll(".ops");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const liveViewer = document.querySelector(".live-view");
const sheet = window.document.styleSheets[0];
const checkbox = document.querySelector('input[type="checkbox"]');



let theNumber = "",
    op = "",
    resultNumber = "";

function getNumbers() {  
        if (op=== "=") {
            resultNumber= "";
            op = "";
            theNumber= "";
        } 
        theNumber += this.getAttribute("data-num");  
        liveViewer.innerHTML += this.getAttribute("data-num");  
        viewer.innerHTML = theNumber;                    
    }


function getOp() {        
        if (op === "="){
            liveViewer.innerHTML = resultNumber;       
            op= this.getAttribute("data-ops");
            theNumber= ""; 
            liveViewer.innerHTML += op;  
        } else if (theNumber!== ""){ 
            evaluateSwitch(op);             
            op = this.getAttribute("data-ops");  
            liveViewer.innerHTML += op;         
            theNumber = ""; 
            }
        } 


function evaluate(op) {
    theNumber = parseFloat(theNumber);  
    let equation = liveViewer.textContent;
    resultNumber = eval(equation);
    viewer.innerHTML = resultNumber;
}

function evaluateSwitch(op) {
    theNumber = parseFloat(theNumber);      
    switch (op) {
        case "+":           
            resultNumber = resultNumber + theNumber;
            break;
        case "-":
            resultNumber = resultNumber - theNumber;
            break;
        case "*":
            resultNumber = resultNumber * theNumber;
            break;
        case "/":
            resultNumber = resultNumber / theNumber;
            break;
        default:
            resultNumber = theNumber;
            break;
    };
    viewer.innerHTML = resultNumber;
}

for (let i=0;i<nums.length; i++){
        nums[i].addEventListener("click", getNumbers);
}

for (let i=0;i<ops.length; i++){
    ops[i].addEventListener("click", getOp);
}
        
liveViewer.addEventListener("animationend", function (){
    liveViewer.innerHTML = "";
    liveViewer.classList.remove("activated-vert");
});

equal.addEventListener("click", function() {  
    liveViewer.classList.add("activated-vert");   
    evaluate(op);
    if ( (!isFinite(resultNumber)) || (isNaN(resultNumber)) ){
        clearAll("Error");            
    }  
    op = this.getAttribute("data-ops");   
});

function clearAll(message) {
    oldNumber = "";
    theNumber = "";
    resultNumber = "";
    op = "";
    liveViewer.innerHTML = "";
    viewer.innerHTML = message;
}

clear.addEventListener("click", function() {
    clearAll("");
});


checkbox.addEventListener('change', function () {
    if (checkbox.checked) {  
        sheet.insertRule('button:hover { background-color: #ee496a;}', sheet.cssRules.length);
    } else {
        sheet.insertRule('button:hover { background-color: greenyellow;}', sheet.cssRules.length);
    }
});
