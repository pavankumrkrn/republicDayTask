const addFive = (val) => val+5

const getOpposite = (val) => {
    if (val.toString().includes('.')) {
        return -1;
    }
    if(val > 0) {
        return -val;
    } else if(val < 0) {
        return -1 * val;
    } else if (val === 0) {
        return 0
    } else  {
        return -1;
    }
}

const toSeconds = (val) => val*60

const toInteger = (val) => +val;

const nextNumber = (val) => val+1;

const getFirstElement = (arr) => arr[0];

const hourToSeconds = (val) => {
    if(typeof(val) === 'object')
    { 
        return val.map(i=>+i*60*60)
    }
    else {
        return +val*60*60
    }
}

const getPerimeter = (a,b) => 2(a+b);

const lessThanHundred = (a,b) => {
    let flag;
    (a+b < 100) ? flag = true : flag = false;
    return flag;
}

const getRemainder = (a,b) => b%a;

const getAnimalLegs = (a,b,c) => (a*2)+(b*4)+(c*4);

const getFrames = ''

const isDivisibleByFive = (val) => {
    let flag
    (val % 5 === 0) ? flag = true : flag = false;
    return flag
}

const isEven = (val) => {
    if(+val)
    return val%2 === 0
    else 
    return -1
}

const areBothOdd = (a,b) => {
    return ((a%2 !== 0)&&(b%2 !== 0))
}

const getFullName = (a,b) => a+' '+b;

const lengthOfWord = (a) => {
    if(a.length || a === ''){
        return a.length
    } else {
        return -1
    }
}

const getLast = (arr) => arr[arr.length-1]

const isSameLength = (a,b) =>  (a.length === b.length)


const getProperty = (obj, key) => obj[key]

const addProperty = (obj, key) => {obj[key] = true}

const removeProperty = (obj, key) => {delete obj[key]}


const getPositivesAndNegatives = (arr) => {
    let obj = arr.reduce ((a,b)=> { 
        (b>0) ? a['pos']++ : a['neg']++;
        return a;
    },{pos : 0, neg:0})
    return [obj['pos'], obj['neg']]
}

const getPositiveNumbers = (arr) => {
    return arr.filter(i=>i>=0);
}

const getPowersOfTwo = (val) => {
    let arr = [];
    for(let i=0; i<=val; i++){
        arr.push(Math.pow(2,i));
    }
    return arr;
}

const finMax = (arr) => {
    let max = 0;
    arr.forEach(i=>{
        if(i>max)
        max =i;
    });
    return max;
}

const isPrime = (val) => {
    let count = 0, flag;
 for(let i=1; i<=val; i++){
     if(val%i === 0)
     count++;
 }
 (count === 2) ? flag =true : flag = false;
 return flag;
}

const getReverse = (val) => {
    return val.split('').reverse().join('');
}

const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
}

const getSum = (str) => str.split(', ').reduce(((a,b)=>{a+b}),0);




//console.log(getProperty({one: 1, two: 2}, 'one'))