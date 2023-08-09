const gameState = {
    waterCount: 0,
    gatherMult: 1,
    gatherMultCost: 100,
    gatherers: 0,
    gathererCost: 50,
    hirelingMult: 1,
    hirelingMultCost: 1000
}

setInterval(function() {
    gameState.waterCount += 1 * gameState.gatherers * gameState.hirelingMult;
    document.getElementById("resource-count").innerHTML = gameState.waterCount;
}, 100)

function gather() {
    gameState.waterCount += 1 * gameState.gatherMult;
    document.getElementById("resource-count").innerHTML = gameState.waterCount;
}

function gatherMultUp() {
    if (costCheck(gameState.gatherMultCost)) {
        gameState.gatherMult += 1;
        gameState.waterCount -= gameState.gatherMultCost;
        gameState.gatherMultCost *= Math.exp(1.3,gameState.gatherMult)
        document.getElementById("mult-display").innerHTML = gameState.gatherMult;
    }
}

function buyGatherers() {
    if (costCheck(gameState.gathererCost)) {
        gameState.gatherers += 1;
        gameState.gathererCost *= Math.exp(1.1,gameState.gatherers)
        gameState.waterCount -= gameState.gathererCost
        document.getElementById("hire-count").innerHTML = gameState.gatherers;
    }
}

function hireMultUp() {
    if (costCheck(gameState.hirelingMultCost)) {
        gameState.hirelingMult += 1;
        document.getElementById("hireling-multiplier").innerHTML = gameState.hirelingMult;
    }
}

function costCheck(price) {
    if((gameState.waterCount - price) >= 0) {
        return true;
    } else {
        return false;
    }
}