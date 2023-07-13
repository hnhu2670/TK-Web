
function changeLeft() {
    let a = document.getElementById("stories");
    let d = 50;
    let computedStyle = window.getComputedStyle(a);
    let leftValue = computedStyle.getPropertyValue("left");
    let rightValue = computedStyle.getPropertyValue("right");
    
    let left1 =  parseInt(leftValue, 10);
    let right1 =  parseInt(rightValue, 10);
    if(right1>=0){
        let newleft = left1 + d;
    a.style.left = newleft+"px";
    }
    
};


function changeRight() {
    let a = document.getElementById("stories");
    let d = 50;
    let computedStyle = window.getComputedStyle(a);
    let leftValue = computedStyle.getPropertyValue("left");
    let rightValue = computedStyle.getPropertyValue("right");

    let left1 =  parseInt(leftValue, 10);
    let right1 =  parseInt(rightValue, 10);
    if(right1<=0){
        let newleft = left1 - d;
        a.style.left = newleft+"px";
    }
}

// function changeLeft(){
//     var s = document.getElementById("stories")
//     var l=0;
//     l+=50;
//     s.style.left=l+"px"
// };
// function changeRight(){
//     var s = document.getElementById("stories")
//     var l=0;
//     l-=50;
//     s.style.left=l+"px"
// };