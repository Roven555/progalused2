// Algandmed
const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores];

// -------------------------------------------------------------
// Viited DOM-ile
// -------------------------------------------------------------
const scoreList = document.getElementById("scoreList");
const result = document.getElementById("result");

const kpiCount = document.getElementById("kpi-count");
const kpiAvg = document.getElementById("kpi-avg");

const countInput = document.getElementById("count");

// Funktsioon tulemuste kuvamiseks
function renderScores() {
    scoreList.innerHTML = "";

    currentScores.forEach(function (score) {
        const item = document.createElement("p");
        item.textContent = score;
        scoreList.appendChild(item);
    });

    kpiCount.textContent = currentScores.length;
}

// 2. samm – Lisa +5 kõigile (map)
function addBonus() {
    currentScores = currentScores.map(function (score) {
        return score + 5;
    });

    renderScores();
}

// 3. samm – Filtreeri punktid ≥ 60 (filter)
function filterByThreshold() {
    currentScores = currentScores.filter(function (score) {
        return score >= 60;
    });

    renderScores();
}

// 4. samm – Arvuta keskmine tulemus (reduce)
function showAverage() {
    if (currentScores.length === 0) {
        kpiAvg.textContent = "–";
        return;
    }

    const sum = currentScores.reduce(function (total, number) {
        return total + number;
    }, 0);

    const avg = sum / currentScores.length;
    kpiAvg.textContent = avg.toFixed(1);
}

// 5. samm – Taasta algseis
function resetAll() {
    currentScores = [...scores];
    renderScores();
    kpiAvg.textContent = "–";
    result.textContent = "";
}

// 6. samm - Genereeri uued skoorid ja kuva
function makeRandom() {
    const count = Number(countInput.value);

    const newScores = [];

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 91) + 10;
        newScores.push(randomNumber);
    }

    currentScores = newScores;

    renderScores();
    kpiAvg.textContent = "–";
}

function chainAverage() {
    const plusFive = currentScores.map(function (score) {
        return score + 5;
    });

    const filtered = plusFive.filter(function (score) {
        return score >= 60;
    });

    if (filtered.length === 0) {
        result.textContent = "Ahela tulemus: puudub";
        return;
    }

    const sum = filtered.reduce(function (total, number) {
        return total + number;
    }, 0);

    const avg = sum / filtered.length;

    result.textContent = "Ahela tulemus: keskmine = " + avg.toFixed(1);
}
