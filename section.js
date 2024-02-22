// // console.log("This is the score from easy",localStorage.getItem("easyscore"))

// let easyscore = localStorage.getItem("easyscore")
// let meduimscore = localStorage.getItem("mediumscore")

// if(easyscore){
//     document.getElementById('easytrophy').style.display = "flex"
// }
// else{
//    document.getElementById('easytrophy').style.display = "none"
// }
// if(meduimscore){
//     document.getElementById('mediumtrophy').style.display = "flex"
// }
// else{
// document.getElementById('mediumtrophy').style.display = "none"
// }




var i = 0;

function move() {
  resetProgressBar();
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {

  var avatarButton = document.getElementById("user-avatar");

  avatarButton.addEventListener("click", function () {
    resetProgressBar();
    simulateProgress();
  });

  function simulateProgress() {
    let progress = 0;

    const interval = setInterval(function () {
      progress += 1;
      document.getElementById("myBar").style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        navigateToNextPage();
      }

    }, 10);
  }

  function resetProgressBar() {
    document.getElementById("myBar").style.width = "0%";
  }

  function navigateToNextPage() {
    var nextPageURL = "./login.html";
    window.location.href = nextPageURL;
  }
});