const formData = { name: playername, score: easyscore }

const fetchData = async () => {
    const response = await fetch("http://localhost:8080/getres")

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const alldata = await response.json();
    console.log("Sorted data by cid", alldata);
};
fetchData()