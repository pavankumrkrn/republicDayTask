//Part A

var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}

cat['height'] = 4;
cat['weight'] = 5;
cat.name = 'Fluffyy'
let friendActivities = [];
let catFriends = [];
cat.catFriends.forEach(obj => {
    catFriends.push(obj.name);
    obj.activities.forEach(a => friendActivities.push(a));
})

let weight = cat.catFriends.reduce(((a, b) => a + b.weight), cat.weight)
let activies = cat.catFriends.reduce(((a, b) => {
    b.activities.forEach(act => a.push(act));
    return a;
}), cat.activities)
cat.catFriends.forEach(cat => {
    if (cat.name === 'bar') {
        cat.activities.push('drink', 'run');
        cat.furcolor = 'brown';
    }
    else { cat.activities.push('meow', 'scratch') }
})


//Part B

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
        {
            date: '3/15/2019',
            damage_points: '5000',
            atFaultForAccident: true
        },
        {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points: '7900',
            atFaultForAccident: true
        }
    ]
}

myCar.accidents.forEach(a => {
    a.atFaultForAccident = false;
    console.log(a.date)
});

//Problem 1

var obj = { name: 'RajiniKanth', age: 33, hasPets: false };

const getValues = (obj) => {
    let arr = [];
    for (let i in obj) {
        arr.push(obj[i])
    }
    return arr;
}

//Problem 2

const getKeys = (obj) => {
    let arr = [];
    for (let i in obj) {
        arr.push('' + i)
    }
    return arr;
}

//Problem 3

const getList = (obj) => {
    let arr = [];
    for (let i in obj) {
        arr.push(['' + i, obj[i]])
    }
    return arr;
}

//Problem 4

var arr = ['GUVI', 'I', 'am', 'geek'];

const getObj = (arr) => {
    let objt = {}
    objt[arr[0]] = arr[arr.length - 1];
    return objt
}

//Problem 5

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

const getObjt = (arr) => {
    return arr.reduce(((a, b) => {
        a[b[0]] = b[1];
        return a;
    }), {})
}

//Problem 6

var data = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]]

const getData = (arr) => {
    return arr.map(a => {
        return a.reduce(((a, b) => {
            a[b[0]] = b[1];
            return a;
        }), {})
    })
}

//Problem 7

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 }

const checkEqual = (a, b) => {
    return (JSON.stringify(a) === JSON.stringify(b))
}

console.log(checkEqual(expected, actual))

//Problem 8

var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]

var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';

const checkQuestion = (str1, str2, arr) => {

    for (let i in arr){
        if(arr[i].question === str1 && arr[i].expectedAnswer === str2)
        return true
    }

    return false;
}

console.log(checkQuestion(ques, ans, securityQuestions))



//Problem 9
var students = [
    {
        name: 'Siddharth Abhimanyu', age: 21
    }, { name: 'Malar', age: 25 },
    { name: 'Maari', age: 18 }, { name: 'Bhallala Deva', age: 17 },
    { name: 'Baahubali', age: 16 }, { name: 'AAK chandran', age: 23 }, { name: 'Gabbar Singh', age: 33 }, { name: 'Mogambo', age: 53 },
    { name: 'Munnabhai', age: 40 }, { name: 'Sher Khan', age: 20 },
    { name: 'Chulbul Pandey', age: 19 }, { name: 'Anthony', age: 28 },
    { name: 'Devdas', age: 56 }
];

const returnMinors = (arr) => {
    return arr.filter(a=> a.age < 20);
}

console.log(returnMinors(students))