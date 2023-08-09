const gameState = {
    resourceCount: 0,
    gatherMult: 1,
    gatherMultCost: 100,
    gatherers: 0,
    gathererCost: 50,
    hirelingMult: 1,
    hirelingMultCost: 1000
}

setInterval(function() {
    gameState.resourceCount += 1 * gameState.gatherers * gameState.hirelingMult;
    document.getElementById("resource-count").innerHTML = gameState.resourceCount;
}, 100)

function gather() {
    gameState.resourceCount += 1 * gameState.gatherMult;
    document.getElementById("resource-count").innerHTML = gameState.resourceCount;
}

function gatherMultUp() {
    if (costCheck(gameState.gatherMultCost)) {
        gameState.gatherMult += 1;
        gameState.resourceCount -= gameState.gatherMultCost;
        gameState.gatherMultCost *= 1.3;
        document.getElementById("mult-display").innerHTML = gameState.gatherMult;
    }
}

function buyGatherers() {
    gameState.gatherers += 1;
    document.getElementById("hire-count").innerHTML = gameState.gatherers;
}

function hireMultUp() {
    gameState.hirelingMult += 1;
    document.getElementById("hireling-multiplier").innerHTML = gameState.hirelingMult;
}

function costCheck(price) {
    if((gameState.resourceCount - price) >= 0) {
        return true;
    } else {
        return false;
    }
}