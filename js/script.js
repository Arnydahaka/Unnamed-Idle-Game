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

// Initialize Clone Objects
const airbagStats = {
    lifeTotal: 100,
    lifeBase: 100,
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
        console.log("Running Dungeon");
        let tick = 1;
        let dngn = setInterval(function() {
            life -= dungeon.damagePerTick;
            money += dungeon.moneyPerTick;
            document.getElementById("money-count").innerHTML = money.toFixed(2);
            if(life <= 0 || dungeon.durationInticks <= tick) {
                airbagStats.clones = airbagStats.clones.slice(1,airbagStats.clones.length);
                clearInterval(dngn);
            }
            tick++;
        }, 100)
    }
}

//Initialize Money
var money = 0;

// Item Purchase Functions
function buyBalloon() {
    if (money >= balloon.cost) {
        money -= balloon.cost;
        balloon.total++;
        balloon.cost += Math.exp(1.1,balloon.total);
        document.getElementById("balloon-cost").innerHTML = balloon.cost;
        airbagStats.lifeTotal = airbagStats.lifeBase + balloon.total * 10;
    }
};

//Using this instead of onclick to make it easier to access the buyballoon function
document.getElementById("balloon-button").addEventListener("click",buyBalloon);

// Initialize Dungeons
const dungeon1 = {
    durationInticks: 600,
    damagePerTick: 1.5,
    moneyPerTick: 0.01
}

// Main Game Loop
const gameLoop = setInterval(function() {
    document.getElementById("balloon-cost").innerHTML = balloon.cost;
    air.total += air.tickRate * air.accumulatorPurity * air.accumulatorSize;
    document.getElementById("air-count").innerHTML = air.total.toFixed(2);
    document.getElementById("airbag-percent").innerHTML = ((air.total / airbagStats.cost) * 100).toFixed(2);
    if(air.total >= airbagStats.cost) {
        // adds a new airbag to the clones queue
        if (airbagStats.clones.length < airbagStats.maxAirbags) {
            let clone = new airbagTemplate(airbagStats.lifeTotal);
            airbagStats.clones.push(clone);
            air.total -= airbagStats.cost;
            let life = clone.life
            clone.runDungeon(dungeon1,life)
        }
    }
    // water.total += water.tickRate;
    // earth.total += earth.tickRate;
    // fire.total += fire.tickRate;
}, 100);