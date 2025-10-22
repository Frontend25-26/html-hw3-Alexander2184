const attack = function(attacker, defender) {
    const dmgString = (attacker.power).toString();
    console.log(`${attacker.name} has attacked ${defender.name} for ${dmgString} damage!`);
    let dmgNumber = parseInt(dmgString);
    if (dmgNumber === 0) {
        dmgNumber = parseFloat(dmgString);
    }
    defender.hp = defender.hp - dmgNumber;
    console.log(`${defender.name} has ${defender.hp} hp remaining!`);
}

const isDead = function(subject) {return (subject.hp <= 0);}

const FALLEN = {
    name: "THE FALLEN", hp: 20, power: 12,
    seal: function(hero) {
        hero.power = hero.power / 10;
    }
}

const hero = {
    name: "Hero", hp: 100, power: 5,
    breakSeal: function() {
        // Defined by your sword
    }
}

for (let i = 0; i < 100; i++) {
    attack(hero, FALLEN);
    if(isDead(FALLEN)) {
        console.log("Hero defeats the FALLEN");
        break;
    }
    attack(FALLEN, hero);
    if(isDead(hero)) {
        console.log("FALLEN defeats the hero");
        break;
    }
    FALLEN.seal(hero);
    hero.breakSeal();
}

// Berzerker sword: this.power *= 8; this.hp -= 10;
// Heavy sword: this.power *= 5;
// Blessed sword: this.power *= 3; this.hp += 3;
// Cursed sword: this.power /= 10;

