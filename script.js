/*
Store the gameboard as an arr inside of an obj
Players are also stored as obj
Object to control the flow of the game

NO GLOBAL CODE I SAID!.. not yet
NO GLOBAL CODE.
*/
function createUser (name) {
    const printName = () => name[0].toUpperCase() + name.slice(1);
    name = name[0].toUpperCase() + name.slice(1);
    let level = 0;
    const getLevel = () => level;
    const levelUp = () => level++;

    let reputation = 0;
    const getRep = () => reputation;
    const repUp = () => reputation++;

    return { name, printName, getLevel, levelUp, getRep, repUp };
}

function createPlayer (name, gameClass) {
    const { printName, getLevel, levelUp, getRep, repUp } = createUser(name);

    const discordName = "@" + name;
    const weapon = "Mighty Axe"

    return { name, printName, gameClass, getLevel, levelUp, getRep, repUp, discordName, weapon };
}

function createEnemy (name, type) {
    const { printName, getLevel, levelUp } = createUser(name);

    const weapon = "Festering Rod";

    return { name, printName, type, getLevel, levelUp, weapon };
}

const stephen = createPlayer("stephen", "warrior");
const goblin001 = createEnemy("horatio", "goblin");


stephen.levelUp();
stephen.levelUp();
stephen.levelUp();

console.log(`${stephen.printName()}'s level is ${stephen.getLevel()} and the gobbo's is a measly ${goblin001.getLevel()}.`);

console.log(`Also, ${stephen.name} the ${stephen.gameClass} is holding the ${stephen.weapon}, whilst ${goblin001.name} the ${goblin001.type} is wielding the ${goblin001.weapon}`);


goblin001.levelUp();
goblin001.levelUp();
goblin001.levelUp();
stephen.repUp();
stephen.repUp();
stephen.repUp();
stephen.repUp();
stephen.repUp();
stephen.repUp();

console.log(goblin001.name);
console.log(goblin001.printName());
