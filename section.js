// console.log("This is the score from easy",localStorage.getItem("easyscore"))

let easyscore = localStorage.getItem("easyscore")
let meduimscore = localStorage.getItem("mediumscore")

if(easyscore){
    document.getElementById('easytrophy').style.display = "flex"
}
else{
   document.getElementById('easytrophy').style.display = "none"
}
if(meduimscore){
    document.getElementById('mediumtrophy').style.display = "flex"
}
else{
document.getElementById('mediumtrophy').style.display = "none"
}
