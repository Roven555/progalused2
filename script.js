// Algandmed
const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores]; // koopia, mida saab muuta
 
// -------------------------------------------------------------
// Viited DOM-ile
// -------------------------------------------------------------
const scoreList = document.getElementById("scoreList");
const result = document.getElementById("result");
 
const kpiCount = document.getElementById("kpi-count");
const kpiAvg = document.getElementById("kpi-avg");
const kpiTh = document.getElementById("kpi-th");
 
const countInput = document.getElementById("count");

// Funktsioon tulemuste kuvamiseks
function renderScores() {
    scoreList.innerHTML = "";
    currentScores.forEach((score) => {
        const item = document.createElement("p");
        item.textContent = score;
        scoreList.appendChild(item);
    });
    //Kuvame, mitu elementi on massiivis
    kpiCount.textContent = currentScores.length;
}

function addBonus () {

  currentScores = currentScores.map(score => score +5);

    renderScores();
} 



function filterByThreshold() {

currentScores = currentScores.filter(score => score >= 60)

renderScores();
}





