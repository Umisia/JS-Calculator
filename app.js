const nums = document.querySelectorAll(".nums");//list
let viewer = document.querySelector("#viewer");
const ops = document.querySelectorAll(".ops");
let equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

let theNumber = "",
    oldNumber = "",
    op = "",
    resultNumber = "";

//console.log(nums[1].getAttribute("data-num"));

for (let i=0;i<nums.length; i++){
    nums[i].addEventListener("click", function() {
        if (resultNumber){
            theNumber = this.getAttribute("data-num");
            resultNumber = "";   
        } else {
            theNumber += this.getAttribute("data-num");                 
        }
        viewer.innerHTML = theNumber;
//        console.log(theNumber);        
    });
}
 
for (let i=0;i<ops.length; i++){
    ops[i].addEventListener("click", function(){
        oldNumber = theNumber;
        theNumber = "";
        op = this.getAttribute("data-ops");
//        equal.setAttribute("data-ops", "");
    });
}

equal.addEventListener("click", function() {
    oldNumber = parseFloat(oldNumber);
    theNumber = parseFloat(theNumber);
    console.log(oldNumber, op, theNumber);
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
    viewer.innerHTML = resultNumber;
    oldNumber = 0;
    theNumber = resultNumber;          
});

clear.addEventListener("click", function() {
    oldNumber = "";
    theNumber = "";
    resultNumber = "";
    viewer.innerHTML = "0";
    
})
 
