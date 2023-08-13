import {money} from './script.js'

// Initialize Clone Objects
const airbagStats = {
    lifeTotal: 100,
    cost: 150
};

class airbagTemplate {
    constructor(lifeTotal) {
        this.life = lifeTotal;
    }
    runDungeon(dungeon) {
        var tick = 1;
        var dngn = setInterval(function() {
            airbag.life -= dungeon.damagePerTick;
            money += dungeon.moneyPerTick;
            document.getElementById("money-count").innerHTML = money.toFixed(2);
            if(airbag.life <= 0 || dungeon.durationInticks <= tick) {
                clearInterval(dngn);
            }
            tick++;
            console.log(`CloneLife: ${airbag.life}. Tick: ${tick}`)
        }, 100)
    }
}
window.money = money
export {airbagTemplate, airbagStats}