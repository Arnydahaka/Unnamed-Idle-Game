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

// Initialize Clone Objects
const airbagStats = {
    lifeTotal: 100,
    cost: 150,
    maxAirbags: 1,
    clones: []
};

// Class for making multiples of clones
class airbagTemplate {
    constructor(lifeTotal) {
        this.life = lifeTotal;
    }
    runDungeon(dungeon,life) {
        console.log("Running Dungeon")
        var tick = 1;
        var dngn = setInterval(function() {
            life -= dungeon.damagePerTick;
            console.log(dungeon.moneyPerTick)
            money += dungeon.moneyPerTick;
            document.getElementById("money-count").innerHTML = money.toFixed(2);
            if(life <= 0 || dungeon.durationInticks <= tick) {
                airbagStats.clones = airbagStats.clones.slice(1,airbagStats.clones.length);
                clearInterval(dngn);
            }
            tick++;
            console.log(`CloneLife: ${life}. Tick: ${tick}`)
        }, 100)
    }
}

//Initialize Money
var money = 0;

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

//Using this instead of onclick to make it easier to access the buyballoon function
document.getElementById("balloon-button").addEventListener("click",buyBalloon)

// Initialize Dungeons
const dungeon1 = {
    durationInticks: 600,
    damagePerTick: 1.5,
    moneyPerTick: 0.01
}

// Main Game Loop
const gameLoop = setInterval(function() {
    air.total += air.tickRate * air.accumulatorPurity * air.accumulatorSize;
    document.getElementById("air-count").innerHTML = air.total.toFixed(2);
    document.getElementById("airbag-percent").innerHTML = ((air.total / airbagStats.cost) * 100).toFixed(2);
    if(air.total >= airbagStats.cost) {
        // adds a new airbag to the clones queue
        if (airbagStats.clones.length < airbagStats.maxAirbags) {
            airbagStats.clones.push(new airbagTemplate(airbagStats.lifeTotal));
            air.total -= airbagStats.cost;
        }
        var lastAirbag = airbagStats.clones[airbagStats.clones.length - 1]
        var life = lastAirbag.life
        lastAirbag.runDungeon(dungeon1,life)
    }
    // water.total += water.tickRate;
    // earth.total += earth.tickRate;
    // fire.total += fire.tickRate;
}, 100);