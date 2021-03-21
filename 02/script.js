// Lecture: variables

/* var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge); */

// Lecture: variables 2

/* var name = 'John';
var age = 26;
console.log(name + age);
console.log(age + age);

var job, isMarried;
//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.'); */

// Lecture: Operators

/* var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
//2016 - 52;
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26;
console.log(ageJohn);
console.log(ageMark);

ageJohn++;
ageJohn = ageJohn + 1;
console.log(ageJohn);

ageMark *= 2;
ageMark = ageMark * 2;
console.log(ageMark); */

// Lecture: if/else statements

/* var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married');
}
else {
    console.log(name + ' is hopefully marry soon :)');
}

isMarried = true;
if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (isMarried) {
    console.log('YES!');
}

if (23 === '23') {
    console.log('Something to print...');
} */

// Lecture: boolean logic and switch
/* var age = 20;
if (age < 20) {
    console.log('John is a teenager.');
}
else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
}
else {
    console.log('John is a man.');
}

var job = 'teacher';
job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
        default:
        console.log('John does something else.');
        break;
} */

// CODING CHALLENGE

/* var hightJohn = 177;
var hightFriend = 178;
var hightAnotherFriend = 179;
var ageJohn = 37;
var ageFriend = 38;
var ageAnotherFriend = 39;

var scoreJohn = hightJohn + ageJohn * 5;
var scoreFriend = hightFriend + ageFriend * 5;
var scoreAnotherFriend = hightAnotherFriend + ageAnotherFriend * 5;

if (scoreJohn === scoreFriend && scoreJohn === scoreAnotherFriend) {
    console.log('It\'s a draw!');
}
else if (scoreJohn > scoreFriend && scoreJohn > scoreAnotherFriend) {
    console.log('John is the winner!');
}
else if (scoreFriend > scoreJohn && scoreFriend > scoreAnotherFriend) {
    console.log('Friend is the winner!');
}
else {
    console.log('Another Friend is the winner!');
}
 */


// Lecture: Functions

/* function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageMary);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948); */

// Lecture: Statements and expressions

/* function someFun(par) {
    //code
}

var someFun = function someFun(par) {
    //code
}

//Expressions
3 + 4
var x = 3;

//Statements
if (x === 5)
{
    //do something
} */

// Lecture: Arrays

/* var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'driver', false];
john.push('Blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

//alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
} */

//var arr = [1, 2, 3];
//arr[0];

/* var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
}

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane); */

//v1.0
/* var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        return 2016 - this.yearOfBirth;
    }
}

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

/* //v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
       this.age = 2016 - this.yearOfBirth;
    }
}

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function () {
       this.age = 2016 - this.yearOfBirth;
    }
}

mike.calculateAge();
console.log(mike); */

// Lecture: Loops


// for loops

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];


/*
for (var i = 0; i < 10; i++) {
    //console.log(i);
}

for (var i = 0; i < names.length; i++) {
    //console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
} */

/* // while loops
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}


for (var i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
} */


// CODING CHALLENGE 2

function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    var isFullAge = age >= 18;
    if (isFullAge) {
        console.log('This person is full age - ' + age);
    }
    else {
        console.log('This person is not full age - ' + age);
    }
    return isFullAge;
}

function printFullAge(yearsOfBirth) {
    var resultArray = [];
    for (var i = 0; i < yearsOfBirth.length; i++) {
        resultArray.push(calculateAge(yearsOfBirth[i]));
    }
    return resultArray;
}

var ages = [1984, 2005, 1987, 1977, 1980];
var newAges = [];

for (var i = 0; i < ages.length; i++) {
    newAges.push(ages[i]);
}

console.log(printFullAge(ages));
console.log(printFullAge(newAges));
