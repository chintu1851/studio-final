let easyscore = 0;
let count = 0;
let arr = [];
let countdown = 20;
let finalscore = 0

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const point = new Audio("https://www.fesliyanstudios.com/play-mp3/615")

function easylevel() {
    console.log("Enter in the easylevel")
    console.log("this is player name",localStorage.getItem("easyscore"))
    var countdownInterval = setInterval(function () {
        countdown--;
        document.getElementById("time").innerHTML = countdown;
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
        var clickDivs = document.querySelectorAll('.easy-button');

        console.log(clickDivs.length);

        for (let i = 0; i < clickDivs.length; i++) {
            clickDivs[i].addEventListener('click', function () {
                audio.currentTime = 0;
                audio.play();
                document.getElementById(`displaycard${i}`).style.display = "block";
                clickButton(i);
            });
        }
    }

    function redirect() {
        setTimeout(() => {
            window.location = "/Users/patelchintan/Desktop/Web Dev Second/Studio 2/Studio Practice/section.html";
        }, 1000)
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
        if (((i == 0 && i1 == 1) || (i == 1 && i1 == 0)) || ((i == 2 && i1 == 5) || (i == 5 && i1 == 2)) || ((i == 6 && i1 == 11) || (i == 11 && i1 == 6)) || ((i == 3 && i1 == 7) || (i == 7 && i1 == 3)) || ((i == 4 && i1 == 9) || (i == 9 && i1 == 4)) || ((i == 8 && i1 == 10) || (i == 10 && i1 == 8))) {
            setTimeout(() => {
                document.getElementById(`card${i1}`).style.visibility = "hidden";
                document.getElementById(`card${i}`).style.visibility = "hidden";
            }, 900);
            point.play();
            easyscore = easyscore + 5;
            countdown = countdown + 5
            console.log("This is score block", easyscore);
            document.getElementById("score").innerHTML = easyscore;
            count = 0;
            arr = [];
            if (easyscore === 30) {
                countdown = countdown - 5
                clearInterval(countdownInterval);
                finalscore = (countdown * 3) + 30
                localStorage.setItem("easyscore", finalscore)
                // alert("You won the game! Your final score is: " + finalscore);
                console.log("this is final score", finalscore)
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
                document.getElementById(`displaycard${i}`).style.display = "none"
                document.getElementById(`displaycard${i1}`).style.display = "none"
            }, 1000);
            count = 0;
            arr = [];
            checktile();
        }
    }
    checktile()

}

easylevel()

