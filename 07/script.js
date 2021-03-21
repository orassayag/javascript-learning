// Lecture: let and const

/* // ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); */

/* // ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);


var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); */

// Lecture: Blocks and IIFE

// ES6
/* {
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);


// ES5
(function () {
    var c = 3;
})();
 */
//console.log(c);

// Lecture: Strings

/* let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('ohz'));
console.log(`${firstName} `.repeat(5)); */

// Lecture: Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6); */

// Lecture: Arrow functions 2

// ES5
/* var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};
//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
};
box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
};
box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
//new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends) {
    const arr = friends.map((el) => {
        return `${this.name} is friends with ${el}`;
    });
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
 */

// Lecture: Destructuring

// ES5
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
/* const [name, age] = ['john', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
};

const {
    firstName,
    lastName
} = obj;
console.log(firstName);
console.log(lastName);

const {
    firstName: a,
    lastName: b
} = obj;
console.log(a);
console.log(b);


function calaAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calaAgeRetirement(1990);
console.log(age2);
console.log(retirement); */

// Lecture: Arrays
/* const boxes = document.querySelectorAll('.box');

// ES5
var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function (cur) {
    //cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArray6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES5
for (var i = 0; i < boxesArray5.length; i++) {
    if (boxesArray5[i].className === 'box blue') {
        continue;
    }
    //boxesArray5[i].textContent = 'I changed to blue';
}

// ES6
for (const cur of boxesArray6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11, 19];
var fullAges = ages.map(function (cur) {
    return cur >= 18;
});
console.log(fullAges);
console.log(fullAges.indexOf(true));
console.log(ages[fullAges.indexOf(true)]);

// ES6
var fullAges2 = ages.findIndex((cur) => {
    return cur >= 18;
});
console.log(fullAges2);
var age2 = ages.find((cur) => {
    return cur >= 18;
});
console.log(age2); */

// Lecture: Spread operator

/* function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach((f) => {
    f.style.color = 'Purple';
}); */


// Lecture: Rest parameters

/* // ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    });
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach((cur) => {
        console.log((2016 - cur) >= 18);
    });
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987); */

// ES5
/* function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    });
}

//isFullAge5(16, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach((cur) => {
        console.log((2016 - cur) >= limit);
    });
}

//isFullAge6(16, 1990, 1999, 1965);
isFullAge6(16, 1990, 1999, 1965, 2016, 1987); */

// Lecture: Default parameters

// ES5
/* function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;

    if (!lastName) {
        this.lastName = 'Smith';
    }

    if (!nationality) {
        this.nationality = 'american';
    }
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); */

// ES6

/* function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); */


// Lecture: Maps

/* const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again');

//console.log(question.get('question'));
//console.log(question.size);

if (question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();


question.forEach((value, key) => {
    //console.log(`This is ${key}, and it's set to ${value}`);
});

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number')
        console.log(`Answer ${key}: ${value}`);
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
//console.log(question.get(ans === question.get('answer')).value); */


// Lecture: Classes

/* // ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting(); */


// Lecture: Classes and subclasses

/* var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal(); */

// Coding challenge

class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class TownPark extends TownElement {
    constructor(name, buildYear, treesNumber, area) {
        super(name, buildYear);
        this.treesNumber = treesNumber;
        this.area = area;
    }

    calculateAge() {
        return new Date().getFullYear() - this.buildYear;
    }

    calculateTreeDensity() {
        return this.treesNumber / this.area;
    }

    parkReport() {
        return `${this.name} has a tree tree density of ${this.calculateTreeDensity()} trees per square km.`;
    }
}

class TownStreet extends TownElement {
    constructor(name, buildYear, length, classification = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.classification = classification;
    }

    streetReport() {
        return `${this.name}, built in ${this.buildYear} is a ${this.classification} street.`;
    }
}

const getAverageParkAge = function (...parks) {
    let sumAges = 0;
    parks.forEach((cur) => {
        sumAges += cur.calculateAge();
    });
    console.log(`Our ${parks.length} parks have an average age of ${sumAges / parks.length} years.`);
};

const getCountTreesNames = function (treesCount, ...parks) {
    parks.forEach((cur) => {
        if (cur.treesNumber > treesCount) {
            console.log(`${cur.name} has more than ${treesCount} trees.`);
        }
    });
};

const getStreetDetails = function (...streets) {
    let totalLength = 0; let averageLength = 0;

    streets.forEach((cur) => {
        totalLength += cur.length;
    });
    averageLength = totalLength / streets.length;
    console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`);
};

const printParksReport = function (...parks) {
    parks.forEach((cur) => {
        console.log(cur.parkReport());
    });
};

const printStreetsReport = function (...streets) {
    streets.forEach((cur) => {
        console.log(cur.streetReport());
    });
};

// Parks
const greenPark = new TownPark('Green Park', 1980, 345, 4);
const nationalPark = new TownPark('National Park', 1922, 1230, 2);
const oakPark = new TownPark('Oak Park', 1982, 567, 5);

// Streets
const oceanAvenueStreet = new TownStreet('Ocean Avenue', 1999, 3.345, 'big');
const evergreenStreet = new TownStreet('Evergreen Street', 2008, 1.554, 'small');
const fourthStreet = new TownStreet('4th Street', 2015, 2.343);
const sunsetBoulevardStreet = new TownStreet('Sunset Boulevard', 1982, 7.443, 'huge');

// Print report
console.log('----PARKS REPORT----');
getAverageParkAge(greenPark, nationalPark, oakPark);
printParksReport(greenPark, nationalPark, oakPark);
getCountTreesNames(1000, greenPark, nationalPark, oakPark);
console.log('----STREET REPORT----');
getStreetDetails(oceanAvenueStreet, evergreenStreet, fourthStreet, sunsetBoulevardStreet);
printStreetsReport(oceanAvenueStreet, evergreenStreet, fourthStreet, sunsetBoulevardStreet);