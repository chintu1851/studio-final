localStorage.removeItem("easyscore")
localStorage.removeItem("mediumscore")
localStorage.removeItem("playername")
localStorage.getItem("finalscore")
console.log("this is finalscore",localStorage.getItem("finalscore"))
function onNameSubmit(event) {
    event.preventDefault();
    var playerName = document.getElementById('playerName').value;
    window.location = "/Users/patelchintan/Desktop/Web Dev Second/Studio 2/Studio Practice/section.html";
    console.log("playerName removed",localStorage.getItem("playername"));
    localStorage.setItem("playername", playerName);
    localStorage.removeItem("finalscore")
}