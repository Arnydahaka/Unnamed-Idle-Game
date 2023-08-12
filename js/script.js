// Initialize Element Objects
const air = {
    name: "Air",
    total: 0,
    tickRate: 0.01,
    accumulatorSize: 1.0,
    accumulatorPurity: 1,
    costCheck: function(price) {
        if (this.total - price >= 0) {
            return true;
        } else {
            return false;
        }
    }
};
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

// Initialize Clone Item Objects
const balloon = {
    extraLife: 10,
    total: 0,
    cost: 10
};

// Item Purchase Functions
function buyBalloon() {
    if (air.costCheck(balloon.cost)) {
        air.total -= balloon.cost;
        balloon.total++;
        balloon.cost += Math.exp(1.1,balloon.total);
    }
};

// Initialize Clone Objects
const airbag = {
    lifeTotal: 100,
    cost: 150
};

// Initialize Dungeons
// VERY WIP
const dungeon1 = {
    durationInSeconds: 60,
    damagePerSecond: 15,
    runDugeon: function(cloneLife) {
        var curDur = this.durationInSeconds
        var dungeonRun = setInterval(function() {
            cloneLife -= 1.5;
            curDur -= 0.1;
            if (curDur == 0) {
                clearInterval(dungeonRun)
            }
        })
    }
}

// Main Game Loop
const gameLoop = setInterval(function() {
    air.total += air.tickRate * air.accumulatorPurity * air.accumulatorSize;
    document.getElementById("air-count").innerHTML = air.total.toFixed(2);
    document.getElementById("airbag-percent").innerHTML = ((air.total / airbag.cost) * 100).toFixed(2);
    // water.total += water.tickRate;
    // earth.total += earth.tickRate;
    // fire.total += fire.tickRate;
}, 100);
