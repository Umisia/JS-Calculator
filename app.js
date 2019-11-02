const nums = document.querySelectorAll(".nums");//list
let viewer = document.querySelector("#viewer");
const ops = document.querySelectorAll(".ops");
let equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

let theNumber = "",
    oldNumber = "",
    op = "",
    resultNumber = "";

for (let i=0;i<nums.length; i++){
    nums[i].addEventListener("click", function() {
        if (resultNumber){
            theNumber = this.getAttribute("data-num");
            resultNumber = "";   
        } else {
            theNumber += this.getAttribute("data-num");
            if (theNumber.length > 8){
                theNumber = theNumber.slice(0,9);
            }
        }
        viewer.innerHTML = theNumber;   
    });
}
 
for (let i=0;i<ops.length; i++){
    ops[i].addEventListener("click", function(){
        if (theNumber !== ""){
        oldNumber = theNumber;
        theNumber = "";
        op = this.getAttribute("data-ops");
        }
        
    });
}

equal.addEventListener("click", function() {
    oldNumber = parseFloat(oldNumber);
    theNumber = parseFloat(theNumber);
    console.log("oldNumber:", oldNumber, ", op:", op, ", theNumber:", theNumber);
    switch (op) {
        case "+":
            resultNumber = oldNumber + theNumber;
            break;
        case "-":
            resultNumber = oldNumber - theNumber;
            break;
        case "*":
            resultNumber = oldNumber * theNumber;
            break;
        case "/":
            resultNumber = oldNumber / theNumber;
            break;
        default:
            resultNumber = theNumber;
            break;
    }
    if ( (!isFinite(resultNumber)) || (isNaN(resultNumber)) ){
            clearAll("Error");
            
    } else {
            viewer.innerHTML = resultNumber;
            oldNumber = 0;
            theNumber = resultNumber; 
        }            
});

let clearAll = function (message) {
    oldNumber = "";
    theNumber = "";
    resultNumber = "";
    viewer.innerHTML = message;
}


clear.addEventListener("click", function() {
    clearAll("0");
});
 
