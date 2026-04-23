let isTraitor = false;
let numbQuestion = 1;
let allQuestions = {};

async function fetchQuestions() {
    try {
        const response = await fetch('../js/questions.json');
        if (!response.ok) throw new Error();

        allQuestions = await response.json();
        initQuestion();
    } catch (error) {
        document.getElementById("question").innerText = "Error loading intelligence data...";
    }
}

function initQuestion() {
    const totalQuestions = Object.keys(allQuestions).length;

    if (numbQuestion > totalQuestions) {
        showResults();
        return;
    }

    document.getElementById("numQuest").innerText = numbQuestion + "/"+ totalQuestions;
    document.getElementById("question").innerText = allQuestions[numbQuestion];
}

function answer(reponse) {
    if (reponse === false) {
        isTraitor = true;
    }

    numbQuestion += 1;
    initQuestion();
}

function showResults() {
    document.querySelector(".test").style.display = "none";

    if (isTraitor) {
        document.querySelector(".traitor").style.display = "block";
    } else {
        document.querySelector(".notTraitor").style.display = "block";
    }
}

window.onload = fetchQuestions;