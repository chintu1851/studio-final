// console.log("This is the score from easy",localStorage.getItem("mediumscore"))
let mediumscore = 0;
let count = 0;
let arr = [];
let countdown = 20;
let mediumfinalscore = 0

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const point = new Audio("https://www.fesliyanstudios.com/play-mp3/615")

function mediumlevel() {
    console.log("Enter in the easylevel")
    var countdownInterval = setInterval(function () {
        countdown--;
        document.getElementById("mtime").innerHTML = countdown;
        setTimeout(() => {
            if (countdown === 0) {
                clearInterval(countdownInterval);
                 document.querySelectorAll('button').forEach(button => button.disabled = true);
                console.log("gameover")
            }
        }, 1000)
    }, 1000);

    function checktile() {

        console.log("code starting again");
        var clickDivs = document.querySelectorAll('.medium-button');

        console.log(clickDivs.length);

        for (let i = 0; i < clickDivs.length; i++) {
            clickDivs[i].addEventListener('click', function () {
                audio.currentTime = 0;
                audio.play();
                document.getElementById(`mdisplaycard${i}`).style.display = "block";
                clickButton(i);
            });
        }
    }

    function redirect() {
        setTimeout(() => {
            window.location = "/Users/patelchintan/Desktop/Web Dev Second/Studio 2/Studio Practice/section.html";
        }, 500)

    }
    function clickButton(i) {
        console.log("click function is awake");
        if (count < 2 && arr.indexOf(i) === -1) {
            arr.push(i);
            count = count + 1;

            if (count === 2) {
                console.log(arr)
                console.log("this is functioncall", checkCards);
                checkCards(arr[0], arr[1]);
                document.querySelectorAll('button').forEach(button => button.disabled = true);
                setTimeout(() => {
                    count = 0;
                    arr = [];
                    document.querySelectorAll('button').forEach(button => button.disabled = false);
                }, 1000)
            }

        }
    }

    function checkCards(i, i1) {
        if (((i == 0 && i1 == 1) || (i == 1 && i1 == 0)) || ((i == 2 && i1 == 5) || (i == 5 && i1 == 2)) || ((i == 6 && i1 == 11) || (i == 11 && i1 == 6)) || ((i == 3 && i1 == 7) || (i == 7 && i1 == 3)) || ((i == 4 && i1 == 9) || (i == 9 && i1 == 4)) || ((i == 8 && i1 == 10) || (i == 10 && i1 == 8)) ||((i == 12 && i1 == 15) || (i == 15 && i1 == 12)) || ((i == 13 && i1 == 14) || (i == 14 && i1 == 13))  ) {
            setTimeout(() => {
                document.getElementById(`mcard${i1}`).style.visibility = "hidden";
                document.getElementById(`mcard${i}`).style.visibility = "hidden";
            }, 900);
            point.play();
            mediumscore = mediumscore + 5;
            countdown = countdown + 5
            console.log("This is score block", mediumscore);
            document.getElementById("mscore").innerHTML = mediumscore;
            count = 0;
            arr = [];
            if (mediumscore === 40) {
                countdown = countdown - 5
                clearInterval(countdownInterval);
                mediumfinalscore = (countdown * 4) + 60
                localStorage.setItem("mediumscore", mediumfinalscore)
                // alert("You won the game! Your final score is: " + mediumfinalscore);
                console.log("this is final score", mediumfinalscore)
                console.log("this is remaining time", countdown)
                setTimeout(() => {
                    redirect()
                }, 3000);
            }
            checktile();
        }
        else if (i == i1) {
            count = 0;
            arr = [];
            console.log("Please select other cards");
            checktile();
        }
        else {
            console.log("Different number");
            setTimeout(() => {
                document.getElementById(`mdisplaycard${i}`).style.display = "none"
                document.getElementById(`mdisplaycard${i1}`).style.display = "none"
            }, 1000);
            count = 0;
            arr = [];
            checktile();
        }
    }
    checktile()

}

mediumlevel()

