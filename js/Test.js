let isTraitor = false;
let numbQuestion = 0;


function fetchJSON(url) {}

function nextQuestion() {
    // modifie l'afficahge pour passer à la question suivante
}

function answer(reponse) {
    if (reponse == false) {
        isTraitor = true;
    }
    numbQuestion += 1;
    nextQuestion();
}
