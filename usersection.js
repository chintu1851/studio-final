localStorage.removeItem("easyscore")
localStorage.removeItem("mediumscore")
localStorage.removeItem("playername")

function onNameSubmit(event) {
    event.preventDefault();
    var playerName = document.getElementById('playerName').value;
    window.location = "section.html";
    console.log(playerName);
    localStorage.setItem("playername", playerName);
}