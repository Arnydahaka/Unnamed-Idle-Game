var resourceCount = 0;

var gatherMult = 1;
var gatherMultCost = 100;

var gatherers = 0;
var gathererCost = 50;

var hirelingMult = 1;
var hirelingMultCost = 1000;

setInterval(function() {
    resourceCount += 1 * gatherers * hirelingMult;
    document.getElementById("resource-count").innerHTML = resourceCount;
}, 100)

function gather() {
    resourceCount += 1 * gatherMult;
    document.getElementById("resource-count").innerHTML = resourceCount;
}

function gatherMultUp() {
    if (costCheck(gatherMultCost)) {
        gatherMult += 1;
        resourceCount -= gatherMultCost;
        gatherMultCost *= 1.3;
        document.getElementById("mult-display").innerHTML = gatherMult;
    }
}

function buyGatherers() {
    gatherers += 1;
    document.getElementById("hire-count").innerHTML = gatherers;
}

function hireMultUp() {
    hirelingMult += 1;
    document.getElementById("hireling-multiplier").innerHTML = hirelingMult;
}

function costCheck(price) {
    if((resourceCount - price) >= 0) {
        return true;
    } else {
        return false;
    }
}