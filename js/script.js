"use strict";

// FOR EACH

// 1

const array1 = [25, 4, 70];

array1.forEach(function(item, index) {
    if (index === 0) {
        console.log(item + 1);
    } else if (index === 1) {
        console.log(item * 2);
    } else {
        console.log(item - 1);
    }
})

// 2
const arrayExample = [77, 878, 45, 64, 61, 1, 8, 15, 69, 22, 39];

arrayExample.forEach(function(value, index) {
    console.log("My value is " + value + " Which is at index " + index);
})


// FILTER

// 1

let myArrayIs = [77, 878, 121, 64, 555, 1, 8, 1];

let myNewArrayIs = myArrayIs.filter(value => {
    return value > 100;
})

console.log(myNewArrayIs);
console.log(myArrayIs);


// 2

const filteredArray = [
    {
        name: "JavaScript",
        rating: 80

    },
    {
        name: "PHP",
        rating: 45

    },
    {
        name: "HTML",
        rating: 97
    }
]

let res = filteredArray.filter(value => {
    return value.rating > 55;
})

console.log(res);

// 3

const cities = [
    {name: "Los Angeles", population: 3792621},
    {name: "New York", population: 8175133},
    {name: "Chicago", population: 2695598},
    {name: "Houston", population: 2099451},
    {name: "Philadelphia", population: 1526006}
];

let bigCities = cities.filter(function (val) {
    return val.population > 3000000;
});
console.log(bigCities);


// 4

const partyAgeAccess = [18, 16, 22, 15, 28, 33, 7, 9, 17];

let filteredAgeAccess = partyAgeAccess.filter((value) => {
  return value > 18
})

console.log(filteredAgeAccess);

// 5
//  խնդիր, որտեղ նոր զանգվածը կպարունակի առաջինի բոլոր արժեքները, 
//  բայց տրված թվով ինդեքսի արժեքը հեռացված կլինի:

function removeAtIndex(arr, index) {
  return arr.filter(function(val, i) {
    return i !== index;
  });
}

console.log(removeAtIndex([5, 10, 15, 20], 2));


// MAP

// 1

const myArrayOfMap = [2, 14, 20, 58];

const myNewArrayOfMap = myArrayOfMap.map(value => value + 2) 

console.log(myNewArrayOfMap); 

console.log(myArrayOfMap); // MAP չի տեսնում սա


// 2

const users = [
  {firstName : "Նարե", lastName: "Սարգսյան"},
  {firstName : "Արմեն", lastName: "Մաթևոսյան"},
  {firstName : "Հակոբ", lastName: "Գինոսյան"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName}`;
})

console.log(userFullnames);


// 3

const mapArray = [3, 4, 5, 6];

let newMapArray = mapArray.map(function(element){
    return element *3;
});

console.log(newMapArray); // [9, 12, 15, 18]


// 4

const itemsForCake = [ 

  {item_name:"Խնձոր", price:"200դր",   brand_details: {name:"Golden Delicious", location:"Սան Ֆրանցիսկո"}, isChecked:true},
  
  {item_name:"Բանան", price:"600դր", brand_details: {name:"Fuji", location:"Սան Դիեգո"}, isChecked:false},
  
  {item_name:"Տանձ", price:"400դր",  brand_details: {name:"Golden Delicious", location:"Սան Ֆրանցիսկո"}, isChecked:true},
                           
  {item_name:"Կաթ", price:"680դր",  brand_details: {name:"Mother Dairy", location:"Կալիֆորնիա"}, isChecked:false},
                         
  ];


  itemsForCake.map(({item_name, price, quantity}) => {  

    // console.log(`${item_name} with price ${price}`)
  
  });

  
  itemsForCake.map(({item_name, isChecked, brand_details: {name}}) => { 
  
  if(isChecked){
  
    console.log(`${item_name} from ${name} is selected`); 
  
  }
  
  });
  

// 5 filter and map 


const numbers = [1, -1, 2, 3];

const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n }))

console.log(items);


// REDUCE

// 1

const values = [-1, -2, 3, 4, -5, -6];

const filtered = values.reduce((total, item) => {
  
    if (item > 0) {
        total.push(item * 2);
    }

    return total;
}, []);

console.log(filtered); // [6, 8]



// 2

const numbersArray = [1, 2, 3];
let sum1 = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum1); // [6]



// 3 with reduce and concat

const mulArray = [[3, 5], [1, 7], [12, 9]]

let newArray = mulArray.reduce(function(accumulator, curValue) {

    return accumulator.concat(curValue)

  },[]

)

console.log(newArray) // [3, 5, 1, 7, 12, 9]


// 4  with map and reduce

const data = [
  ["Անի","Սարգսյան", 17],
  ["Ռուբեն","Քամալյան",55],
  ["Վախթանգ","Հարությունյան", 29]
]

let dataConcat = data.map(item => item.reduce((a,i)=>`${a} ${i}`))

console.log(dataConcat); // ["Անի Սարգսյան 17", "Ռուբեն Քամալյան 55", "Վախթանգ Հարությունյան 29"]


// 5

const numBers = [1, 2, 3, 4];

const suM = (a, b) => a + b;
const toTal = numBers.reduce(suM, 0);

console.log(toTal); // -> 10


// 6  Reduce which divide people by gender

const arr = [
	{ gender: 'F', name: 'Joyce' },
	{ gender: 'M', name: 'Jim' },
	{ gender: 'F', name: 'Lucy' },
	{ gender: 'F', name: 'Janet' },
	{ gender: 'M', name: 'Jack' },
	{ gender: 'M', name: 'Ferdinand' },
  ];
  
  const groupedNames = arr.reduce((acc, elem) => {
	if (acc[elem.gender]) {
	  acc[elem.gender].push(elem);
	} else {
	  acc[elem.gender] = [elem];
	}
	return acc;
  }, {});
  
  console.log(groupedNames);


// SOME || EVERY
// 1

const nums = [34, 2, 48, 91, 12, 32];
const abc = nums.every(value => value < 100);
console.log(abc);


// 2
const numberss = [34, 2, 48, 91, 12, 32];
const Abc = numberss.some(item => item % 2 == 1);
console.log(Abc);



// FILL

const arrayOfFill = [8, 6, 5, 4];

arrayOfFill.fill(11, 1, 3 )

console.log(arrayOfFill );  // [8, 11, 11, 4]


// FIND

const array = [-8, -6, 5, -4];
    const found = array.find(function (element) {
        return element > 0;
    });

console.log(found)



// 2. ձեռքով ստեղծում եք հետևյալ մեթոդները

// forEach 

const myForEachMethod = [1, 2, 3, 4, 5];

for (let i = 0; i < myForEachMethod.length; i++) {
  const el = myForEachMethod[i] + 1;
  console.log(el);
}



// map
function map(arr, mapFn) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
	  const mappedValue = mapFn(arr[i], i, arr);
	  result.push(mappedValue);
	}
	return result;
  }
  
  const num = [1, 2, 3, 4];
  const square = x => x * x;
  const squaredNumbers = map(num, square);
  
  console.log(squaredNumbers); // [1, 4, 9, 16]



// filter
const myOwnFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12];

function filterFunc(items, callBack) {
	let final = [];
	for (let i = 0; i < items.length; i++) {
		if (callBack(items[i])) {
		final.push(items[i])
		}
	}
	return final

}
function filterCallback(element) {
	return element % 2 === 0
}

console.log(filterFunc( myOwnFilter, filterCallback));  // [ 2, 4, 6, 8, 10, 12 ]



// reduce

function reduce(arr, reducer, initValue) {
  let accumulator = initValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const number = [1, 2, 3, 4];

const sum = (a, b) => a + b;
const total = reduce(number, sum, 0);

console.log(total); // 10