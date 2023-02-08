// ################################################################################################
// #                            Constant Variables/Enums                                          #
// ################################################################################################
const POWER_DMG_MULTIPLIER = 5;
const NO_HP = 0;

const superPowersList = ["Heat vision", "Ice Beam", "Super hit"];

// ################################################################################################
// #                              Dictionaries/models                                             #
// ################################################################################################
const messages = {
  died: "Received a Fatal Blow - Death",
  hit: "Direct Hit - HP: ",
  superPowerUsed: " Used Super Powers: ",
};

// ################################################################################################
// #                              Exporting the class                                             #
// ################################################################################################

export default class Warrior {
  constructor(power, hp, name) {
    this.name = name;
    this.power = power;
    this.hp = hp;
    this.superPowers = this.randomSuperPower();
  }

  attack(attackType) {
    if (this.isSuperPower(attackType)) {
      console.log(`${this.name}${messages.superPowerUsed} ${this.superPowers}`);
      return this.power * POWER_DMG_MULTIPLIER;
    }
    return this.power;
  }

  receiveDamage(damage) {
    this.hp -= damage;
    if (this.isDead()) {
      console.log(`${this.name} ${messages.died}` + "\n");
      return;
    }
    console.log(`${messages.hit} ${this.hp}` + "\n");
  }

  randomSuperPower() {
    const odds = Math.random() * superPowersList.length;
    return superPowersList[Math.floor(odds)];
  }

  isSuperPower(superPower) {
    return this.superPowers === superPower;
  }

  isDead() {
    return this.hp <= NO_HP;
  }
}
