localStorage.removeItem("easyscore")
localStorage.removeItem("mediumscore")
localStorage.removeItem("playername")

function onNameSubmit(event) {
    event.preventDefault();
    var playerName = document.getElementById('playerName').value;
    window.location = "/Users/patelchintan/Desktop/Web Dev Second/Studio 2/Studio Practice/section.html";
    console.log(playerName);
    localStorage.setItem("playername", playerName);
}