let dice=document.getElementById("dice")
// console.log(dice)
let button=document.querySelector(".button")
// console.log(button)
let ul=document.querySelector(".track")
//  console.log(ul)
let arr=[]
function roll(){
    let value1=Math.floor(Math.random()*6)+1
    let diceface=getdice(value1)
    dice.innerHTML=diceface
    arr.push(value1)
    // console.log(arr)
    update1()

}
function update1(){
    ul.innerHTML=""
    for(let i=0;i<arr.length;i++){
        let li=document.createElement("li")
        li.innerHTML=`rood ${i+1}:<span>
        ${getdice(arr[i])}</span>`
        ul.appendChild(li)
        // console.log(ul)
    }
}
function getdice(value1){
    switch(value1){
        case 1:
            return" &#9856"
        case 2:
            return "&#9857"  
        case 3:
            return "&#9858"  
        case 4:
            return "&#9859"
        case 5:
            return "&#9860"    
        case 6:
            return "&#9861" 
        default:
            return ""                
    }
}
button.addEventListener("click",function(){{
    setTimeout(()=>{
        roll()
    },1000)
}})
// de no hien len xuc sac
// nhu the nay