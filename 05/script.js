// Function constructor

/* var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Jane', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); */

// Object.create

/* var personProto = {
    calculateAge: function () {
        console.log(2016 - yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
}); */



// Primitives vs objects

// Primitives

/* var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects

var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30,
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city); */


// Passing functions as arguments

/* var years = [1990, 1965, 1937, 2010, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates); */

// Lecture: Functions returning functions

/* function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', Can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', What subject do you teach?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mike');
designerQuestion('Mark');
designerQuestion('Jonas');

interviewQuestion('teacher')('Mark'); */

// Lecture: IIFE

/* function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); */


// Lecture: Closures

/* function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// retirement(66)(1990);

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', Can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', What subject do you teach?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', What do you do?');
        }
    }
}

function interviewQuestion(job) {
    var question;
    return function (name) {
        if (job === 'designer') {
            question = name + ', Can you please explain what UX design is?';
        } else if (job === 'teacher') {
            question = name + ', What subject do you teach?';
        } else {
            question = 'Hello ' + name + ', What do you do?';
        }
        console.log(question);
    };
}

interviewQuestion('teacher')('Jane'); */


// Lecture: Bind, call and apply

/* var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon'])

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2010, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan); */

// Code Challenge - basic

/* var Question = function (questionId, question, answers, correctAnswer) {
    this.questionId = questionId;
    this.question = question;
    this.answers = answers;
    this.correntAnswer = correctAnswer;
};

Question.prototype.displayQuestion = function () {
    if (this.question && this.answers) {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
};

Question.prototype.checkAnswer = function (answer) {
    if ((answer || answer === 0) && typeof this.answers[answer] !== 'undefined') {
        console.log(answer === this.correntAnswer ? 'Correct answer!' : 'Incorrect answer!');
    } else {
        console.log('Please insert an answer');
    }
};

(function() {
    var question1 = new Question(1, 'Is JavaScript is the coolest language ever?', ['Yes', 'No'], 0);
    var question2 = new Question(2, 'What is the student name?', ['Avi', 'Or'], 1);
    var question3 = new Question(3, 'What is the student\'s dog name?', ['Miki', 'Tulip'], 1);
    questionsArray = [question1, question2, question3];
    var questionIdToDisplay = Math.floor(Math.random() * 2);
    questionsArray[questionIdToDisplay].displayQuestion();
    var answer = prompt('Please insert the correct answer (Just type the number)');
    questionsArray[questionIdToDisplay].checkAnswer(Number(answer));
})(); */

// Code Challenge - expert


(function () {
    var Question = function (questionId, question, answers, correctAnswer) {
        this.questionId = questionId;
        this.question = question;
        this.answers = answers;
        this.correntAnswer = correctAnswer;
    };

    Question.prototype.displayQuestion = function () {
        if (this.question && this.answers) {
            console.log(this.question);
            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]);
            }
        }
    };

    Question.prototype.checkAnswer = function (answer, userScore) {
        if ((answer || answer === 0) && typeof this.answers[answer] !== 'undefined') {
            if (answer === this.correntAnswer) {
                console.log('Correct answer!');
                userScore++;
            } else {
                console.log('Incorrect answer!');
            }
            console.log('Your current score: ' + userScore);
            console.log('--------------------------------');
        } else {
            console.log('Please insert an answer');
        }
    };

    var userScore = 0;
    var question1 = new Question(1, 'Is JavaScript is the coolest language ever?', ['Yes', 'No'], 0);
    var question2 = new Question(2, 'What is the student name?', ['Avi', 'Or'], 1);
    var question3 = new Question(3, 'What is the student\'s dog name?', ['Miki', 'Tulip'], 1);
    questionsArray = [question1, question2, question3];

    var answer;
    while (answer !== 'exit') {
        var questionIdToDisplay = Math.floor(Math.random() * (questionsArray.length - 1));
        questionsArray[questionIdToDisplay].displayQuestion();
        var answer = prompt('Please insert the correct answer (Just type the number)');
        questionsArray[questionIdToDisplay].checkAnswer(Number(answer), userScore);
    }
})();