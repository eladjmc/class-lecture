// imports ---> importing the class / function / variables
import Warrior from "./warrior.js";

// ################################################################################################
// #                            Constant Variables/Enums                                          #
// ################################################################################################

const BASE_POWER = 2;
const BASE_HP = 25;

// ################################################################################################
// #                              Dictionaries/models                                             #
// ################################################################################################

const possibleNames = {
  heroName1: "Superman",
  heroName2: "Batman",
  heroName3: "Spiderman",
  villainName1: "Joker",
  villainName2: "Lex",
  villainName3: "Hobgoblin",
};

const messages = {
  heroAttack: " Is Attacking!",
  villainAttack: " Is Attacking!",
};

// ################################################################################################
// #                             Saving class instances                                           #
// ################################################################################################

const superHero = new Warrior(BASE_POWER, BASE_HP, possibleNames.heroName1);
const villain = new Warrior(BASE_POWER, BASE_HP, possibleNames.villainName1);

// ################################################################################################
// #                               declaring functions                                            #
// ################################################################################################

const runSimulationFight = (superHero, villain) => {
  while (true) {
    if (superHero.isDead()) break;

    console.log(superHero.name + messages.heroAttack);
    let powers = superHero.randomSuperPower();
    villain.receiveDamage(superHero.attack(powers));

    if (villain.isDead()) break;

    console.log(villain.name + messages.villainAttack);
    powers = villain.randomSuperPower();
    superHero.receiveDamage(villain.attack(powers));
  }
};

// Calling functions ---> function invocation

runSimulationFight(superHero, villain);
