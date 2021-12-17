// const arr = [
//   { name: 'Bill', age: 25 },
//   { name: 'Jony', age: 35 },
//   { name: 'Tom', age: 15 },
// ];

// const callback = function () {
//   console.log(this.name, this.age);
// };

// const printName = function (callback) {
//   this.forEach(item => callback.call(item));
// };

// printName.call(arr, callback);

// 'use strict';

// const arr = [1, 2, 3, 4, 5];
// const forEach = function (index = 0) {
//   if (index >= this.length) return;
//   console.log(this[index]);
//   // index += 1;
//   forEach.call(this, ++index);
// };

// forEach.call(arr);

// const student = {
//   name: 'Bill',
//   email: 'email',
//   homeWorkResoults: [
//     {
//       tpic: 'html',
//       succsse: true,
//     },
//   ],
//   showName() {
//     console.log(`Имя студента: ${this.name} почта: ${this.email}`);
//   },

//   getHomeWordResoult() {
//     console.log(this.homeWorkResoults);
//   },

//   addHomeWordResoult(value) {
//     this.homeWorkResoults.push(value);
//   },
// };

// student.showName();
// student.addHomeWordResoult({ topic: 'css', succsse: true });
// student.addHomeWordResoult({ topic: 'JS', succsse: false });
// student.getHomeWordResoult();
// ******************************************
// const Student = function (name, email) {
//   const homeWorkResults = [];
//   this.showName = function () {
//     console.log(`Имя студента: ${name}, email: ${email}`);
//   };
//   this.addHomeWorkResults = function (topic, success) {
//     homeWorkResults.push({ topic, success });
//   };
//   this.getHomeWorkResults = function () {
//     console.log(homeWorkResults);
//   };
// };

// const studentOne = new Student('Anna', 'em@i.ua');
// const studentTwo = new Student('Ivan', 'Ivan@i.ua');

// studentOne.showName();
// studentTwo.showName();
// studentOne.addHomeWorkResults('html', true);
// studentTwo.addHomeWorkResults('css', false);
// studentOne.getHomeWorkResults();
// studentTwo.getHomeWorkResults();

// ****************
'use strict';
​
// const contact = {
//     name: "Bill", 
//     showName() {
//         console.log(this);
//     }
// }
​
// contact.showName();
​
// const test = contact.showName;
​
// test();
​
// contact.test1 = test;
​
// contact.test1();
​
/*-----------------*/
​
// const user = {
//     name: "Bill",
//     lname: "Gray"
// };
​
// const showFullName = function (a, b, c, ...params) {
//     console.log(a, b, c, params);
//     console.log(this.name, this.lname);
// };
​
//user.show = showFullName;
//user.show();
​
// showFullName.call(user, 1, 2, 3);
// showFullName.apply(user, [1, 2, 3]);
// const newFn = showFullName.bind(user, 1, 2, 7);
​
// newFn(9,6,11);
// showFullName.call(user, 1, 2, 7);
​
​
/*----------------*/
​
​
// const fn = () => {
//     console.log(this);
// };
​
// fn.call({ name: "Bill" });
// const newFn = fn.bind({ name: "Bill" });
// newFn();
​
// const foo = function (...params) {
//     console.log(this);
//     const res = params.map(item => this.test + `-${item}`);
//     console.log(res);
// }
​
// foo.call({ test: 'TEST' }, 1, 2, 3, 4);
​
// console.log(this);
​
// (function(item) { 
//     console.log(this)
// })()
​
// const fn = item => console.log(this);
// fn();
​
/*-------------------------*/
​
​
class Attack {
    constructor(dmg, manaCost) {
        this.dmg = dmg;
        this.manaCost = manaCost;
    }
}
​
class Hero {
​
    static expForLevel = 100;
    static expForAttack = 10;
​
    #HP;
    #baseHP;
    #baseMP;
    #MP;
    #name;
    #type;
    #attack;
    #exp = 0;
    #level = 1;
​
    constructor(name, HP, MP, type, attack) {
        this.#name = name;
        this.#HP = HP;
        this.#baseHP = HP;
        this.#MP = MP;
        this.#baseMP = MP;
        this.#type = type;
        this.#attack = attack;
    }
​
    get attack() {
        return this.#attack;
    }
​
    get dmg() {
        if (this.attack.manaCost <= this.#MP)
            return this.attack.dmg;
​
        return 0;
    }
​
    get HP() {
        return this.#HP;
    }
​
    set HP(value) {
        if (value <= 0) this.#died();
        else this.#HP = value;
    }    
​
    get exp() {
        return this.#exp;
    }
​
    set exp(value) {
        this.#exp = value;
        const needLevelExp = Hero.expForLevel * this.#level;
        if (this.#exp >= needLevelExp) {
            this.#levelUp();
            this.#exp = this.#exp - needLevelExp;
        }
    }
​
    doAttack(hero) {
        if (hero === this) return false;
        if (!this.dmg) return false;
​
        hero.HP -= this.dmg;
        this.#MP -= this.#attack.manaCost;
        this.exp += Hero.expForAttack;
    }
​
    showHero() {
        console.log(
            this.#type,
            this.#name,
            `${this.#HP}/${this.#baseHP}`,
            `${this.#MP}/${this.#baseMP}`,
            this.attack,
            this.#exp,
            this.#level,
        );
    }
​
    #levelUp() {
        this.#level++;
    }
    
    #died() {
        this.#exp = Math.floor(this.#exp / 2);
        this.HP = this.#baseHP;
        this.MP = this.#baseMP;
    }
}
​
class Orc extends Hero {
​
    constructor(name) {
        super(name, 2000, 1000, 'Orc', new Attack(50, 35));
    }
​
}
​
class Elf extends Hero {
​
    constructor(name) {
        super(name, 1000, 2000, 'Elf', new Attack(120, 150));
    }
​
}
​
class Human extends Hero {
​
    constructor(name) {
        super(name, 1500, 1500, 'Human', new Attack(80, 75));
    }
​
}
​
const human = new Human("Bill");
const elf = new Elf("Legolas");
const orc = new Orc("Rxar");
​
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
​
const heroes = [human, orc, elf];
​
for (let i = 0; i < 1000; i++) {
    heroes[getRandomNumber(0, heroes.length)].doAttack(heroes[getRandomNumber(0, heroes.length)]);
}
​
human.showHero();
elf.showHero();
orc.showHero();