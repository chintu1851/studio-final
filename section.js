// console.log("This is the score from easy",localStorage.getItem("easyscore"))

let easyscore = localStorage.getItem("easyscore")
let meduimscore = localStorage.getItem("mediumscore")
let playername = localStorage.getItem("playername")

let score = 0


if (easyscore) {
    document.getElementById('easytrophy').style.display = "flex"
    console.log(easyscore)
    console.log(meduimscore)
    console.log("this is player name", localStorage.getItem("playername"));
    // const formData = { name: playername, score: easyscore }
    // postData()
}
else {
    document.getElementById('easytrophy').style.display = "none"
}

if (meduimscore) {
    document.getElementById('mediumtrophy').style.display = "flex"
}
else {
    document.getElementById('mediumtrophy').style.display = "none"
}

document.getElementById("backbutton").addEventListener('click', function () {

    if (easyscore || meduimscore) {
        if ((easyscore && meduimscore) !== null) {
            score = parseInt(easyscore) + parseInt(meduimscore)
            window.location = "login.html"
            postData()
        }
        else if (meduimscore) {
            score = meduimscore
            window.location = "login.html"
            postData()
        }
        else {
            score = easyscore
            window.location = "login.html"
            postData()
        }
        console.log("this is final score ", score)

    }
    // else if(mediumscore){
    //        if ((easyscore && meduimscore) !== null) {
    //         score = parseInt(easyscore) + parseInt(meduimscore)
    //         window.location = "login.html"
    //     }
    //     else if (meduimscore) {
    //         score = meduimscore
    //         window.location = "login.html"
    //     }
    //     else {
    //         score = easyscore
    //         window.location = "login.html"
    //     }
    // }
    else {
        score = 0
        window.location = "login.html"
    }
    localStorage.setItem("finalscore", score)

})
const fetchData = async () => {
    const response = await fetch("http://localhost:8080/getres")

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const alldata = await response.json();
    console.log("Sorted data by cid", alldata);
};
fetchData()
const postData = async () => {
    console.log("this is post function")
    const formData = { name: playername, score: easyscore }
    try {
        const response = await fetch("http://localhost:8080/postdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchData()
        console.log("Data added successfully");
    } catch (error) {
        console.error("Error adding data:", error);
    }

};