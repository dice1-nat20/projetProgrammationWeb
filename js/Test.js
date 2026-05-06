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

    document.getElementById("numQuest").innerText = numbQuestion + "/" + totalQuestions;
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
    document.querySelectorAll(".test").forEach(el => el.style.display = "none");

    const info = document.getElementById("info");
    if (info) info.style.display = "none";

    if (isTraitor) {
        document.querySelectorAll(".traitor").forEach(el => el.style.display = "block");
    } else {
        document.querySelectorAll(".notTraitor").forEach(el => el.style.display = "block");
    }
}

window.onload = fetchQuestions;