const gameState = {
    waterCount: 0,
    gatherMult: 1,
    gatherMultCost: 100,
    gatherers: 0,
    gathererCost: 50,
    hirelingMult: 1,
    hirelingMultCost: 1000
};

const air = {
    name: "Air",
    total: 0,
    tickRate: 0.01,
    accumulatorSize: 1.0,
    accumulatorPurity: 1,
    cloneCost: 150,
    costCheck: function(price) {
        if (this.total - price >= 0) {
            return true;
        } else {
            return false;
        }
    }
};
const balloon = {
    strength: 0.1,
    total: 0,
    cost: 10
}
const water = {
    name: "Water",
    total: 0,
    tickRate: 0.00,
    accumulatorSize: 0,
    accumulatorPurity: 1,
    cloneCost: 150,
    costCheck: function(price) {
        if (this.total - price >= 0) {
            return true;
        } else {
            return false;
        }
    }
};
const earth = {
    name: "Earth",
    total: 0,
    tickRate: 0.00,
    accumulatorSize: 0,
    accumulatorPurity: 1,
    cloneCost: 150,
    costCheck: function(price) {
        if (this.total - price >= 0) {
            return true;
        } else {
            return false;
        }
    }
};
const fire = {
    name: "Fire",
    total: 0,
    tickRate: 0.00,
    accumulatorSize: 0,
    accumulatorPurity: 1,
    cloneCost: 150,
    costCheck: function(price) {
        if (this.total - price >= 0) {
            return true;
        } else {
            return false;
        }
    }
};

setInterval(function() {
    air.total += air.tickRate * air.accumulatorPurity * air.accumulatorSize;
    document.getElementById("air-count").innerHTML = air.total.toFixed(2);
    document.getElementById("airbag-percent").innerHTML = ((air.total / air.cloneCost) * 100).toFixed(2);
    // water.total += water.tickRate;
    // earth.total += earth.tickRate;
    // fire.total += fire.tickRate;
}, 100);

function buyBalloon() {
    if (air.costCheck(balloon.cost)) {
        air.total -= balloon.cost;
        balloon.total++;
        air.accumulatorSize++;
        balloon.cost += Math.exp(1.1,balloon.total);
    }
};