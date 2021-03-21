'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

// Lecture: Destructuing

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
question.set('question', 'What is the offical name of the latest major JavaScript version?');
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

var TownElement = function TownElement(name, buildYear) {
    _classCallCheck(this, TownElement);

    this.name = name;
    this.buildYear = buildYear;
};

var TownPark = function (_TownElement) {
    _inherits(TownPark, _TownElement);

    function TownPark(name, buildYear, treesNumber, area) {
        _classCallCheck(this, TownPark);

        var _this = _possibleConstructorReturn(this, (TownPark.__proto__ || Object.getPrototypeOf(TownPark)).call(this, name, buildYear));

        _this.treesNumber = treesNumber;
        _this.area = area;
        return _this;
    }

    _createClass(TownPark, [{
        key: 'calculateAge',
        value: function calculateAge() {
            return new Date().getFullYear() - this.buildYear;
        }
    }, {
        key: 'calculateTreeDensity',
        value: function calculateTreeDensity() {
            return this.treesNumber / this.area;
        }
    }, {
        key: 'parkReport',
        value: function parkReport() {
            return this.name + ' has a tree tree density of ' + this.calculateTreeDensity() + ' trees per square km.';
        }
    }]);

    return TownPark;
}(TownElement);

var TownStreet = function (_TownElement2) {
    _inherits(TownStreet, _TownElement2);

    function TownStreet(name, buildYear, length) {
        var classification = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'normal';

        _classCallCheck(this, TownStreet);

        var _this2 = _possibleConstructorReturn(this, (TownStreet.__proto__ || Object.getPrototypeOf(TownStreet)).call(this, name, buildYear));

        _this2.length = length;
        _this2.classification = classification;
        return _this2;
    }

    _createClass(TownStreet, [{
        key: 'streetReport',
        value: function streetReport() {
            return this.name + ', built in ' + this.buildYear + ' is a ' + this.classification + ' street.';
        }
    }]);

    return TownStreet;
}(TownElement);

var getAverageParkAge = function getAverageParkAge() {
    var sumAges = 0;

    for (var _len = arguments.length, parks = Array(_len), _key = 0; _key < _len; _key++) {
        parks[_key] = arguments[_key];
    }

    parks.forEach(function (cur) {
        sumAges += cur.calculateAge();
    });
    console.log('Our ' + parks.length + ' parks have an average age of ' + sumAges / parks.length + ' years.');
};

var getCountTreesNames = function getCountTreesNames(treesCount) {
    for (var _len2 = arguments.length, parks = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parks[_key2 - 1] = arguments[_key2];
    }

    parks.forEach(function (cur) {
        if (cur.treesNumber > treesCount) {
            console.log(cur.name + ' has more than ' + treesCount + ' trees.');
        }
    });
};

var getStreetDetails = function getStreetDetails() {
    var totalLength = 0; var averageLength = 0;

    for (var _len3 = arguments.length, streets = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        streets[_key3] = arguments[_key3];
    }

    streets.forEach(function (cur) {
        totalLength += cur.length;
    });
    averageLength = totalLength / streets.length;
    console.log('Our ' + streets.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + averageLength + ' km.');
};

var printParksReport = function printParksReport() {
    for (var _len4 = arguments.length, parks = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        parks[_key4] = arguments[_key4];
    }

    parks.forEach(function (cur) {
        console.log(cur.parkReport());
    });
};

var printStreetsReport = function printStreetsReport() {
    for (var _len5 = arguments.length, streets = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        streets[_key5] = arguments[_key5];
    }

    streets.forEach(function (cur) {
        console.log(cur.streetReport());
    });
};

// Parks
var greenPark = new TownPark('Green Park', 1980, 345, 4);
var nationalPark = new TownPark('National Park', 1922, 1230, 2);
var oakPark = new TownPark('Oak Park', 1982, 567, 5);

// Streets
var oceanAvenueStreet = new TownStreet('Ocean Avenue', 1999, 3.345, 'big');
var evergreenStreet = new TownStreet('Evergreen Street', 2008, 1.554, 'small');
var fourhStreet = new TownStreet('4th Street', 2015, 2.343);
var sunsetBoulevardStreet = new TownStreet('Sunset Boulevard', 1982, 7.443, 'huge');

// Print report
console.log('----PARKS REPORT----');
getAverageParkAge(greenPark, nationalPark, oakPark);
printParksReport(greenPark, nationalPark, oakPark);
getCountTreesNames(1000, greenPark, nationalPark, oakPark);
console.log('----STREET REPORT----');
getStreetDetails(oceanAvenueStreet, evergreenStreet, fourhStreet, sunsetBoulevardStreet);
printStreetsReport(oceanAvenueStreet, evergreenStreet, fourhStreet, sunsetBoulevardStreet);
