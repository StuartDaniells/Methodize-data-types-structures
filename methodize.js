Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function 
that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) 
should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


// FINAL SOLUTION AT THE END

------------------------------------------------------------


const list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let newList = [];

function smallest(arr){
	let len = list.length
	while (newList.length < len){
		let sNum = list[0];
		for (num of list) {
			(sNum < num) ? '' : sNum = num;
		}
		newList.push(sNum)
		let index = list.indexOf(sNum)
		list.splice(index, 1);
	}
	return newList;
}

smallest(list)



// Answer:
[1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]


--------------------------OR------------------------------

const list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


list.sort((a,b) => a-b)

// Answer:
[1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]


---------------------Assignment V1----------------------


const list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// Convert to a sorted ascending ordered list
const sortedList = list.sort((a,b) => a-b)

let orderedList = sortedList.map(num => {
	return semiList = sortedList.filter(num2 => {
		return num === num2;
	})
})

// Convert all items in array to a string type
orderedList = orderedList.map(item => JSON.stringify(item))

// Extracting unique items only from the array
orderedList = [... new Set(orderedList)]

// Converting back to array
orderedList = orderedList.map(items => JSON.parse(items))

// Removing single item lists from the main array and storing them as their data type states
for (let i = 0; i < orderedList.length; i++){
	if (orderedList[i].length === 1) {
		orderedList[i] = Number(orderedList[i])
	}
}

orderedList;

// 				(OR)
// let final = orderedList.map(item => {
// 		return (item.length === 1) ? Number(item) : item ;
// })
// final; -> REMOVE 'orderList;' IF ADDING 'final;'

---------------------Assignment V2----------------------


const list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// Convert to a sorted ascending ordered list
const sortedList = list.sort((a,b) => a-b)

let orderedList = sortedList.map(num => {
	return semiList = sortedList.filter(num2 => {
		return num === num2;
	})
})

// Convert all items in array to a string type 
// (AND) Extracting unique items only from the array.
// (AND) Converting back to array
// (AND) Removing single item lists from the main array and storing them as their data type states
orderedList = [... new Set(orderedList.map(item => JSON.stringify(item)))].map(items => JSON.parse(items)).map(item => {
	let miniList = (item.length === 1) ? Number(item) : item ;
	return miniList
})


---------------------Assignment BONUS V1----------------------


const list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'2','2','3','21','21','88','88','88','4','4','4','71','11'];


// Convert to a sorted ascending ordered list
const ordering = (arr) => {
	let orderedList = arr.map(num => {
		return semiList = arr.filter(num2 => {
			return num === num2;
		})
	})
	
	// Convert all items in array to a string type
	orderedList = orderedList.map(item => JSON.stringify(item))
	
	// Extracting unique items only from the array
	orderedList = [... new Set(orderedList)]
	
	// Converting back to array
	orderedList = orderedList.map(items => JSON.parse(items))
	
	// Removing single item lists (either string or number) from the main array and storing them as their data type states
	for (let i = 0; i < orderedList.length; i++){
		if ((orderedList[i].length === 1) && (typeof(orderedList[i][0]) === 'string')){
			orderedList[i] = orderedList[i][0];
		}
		else if((orderedList[i].length === 1) && (typeof(orderedList[i][0]) === 'number')){
			orderedList[i] = Number(orderedList[i]);
		}
	}
	
	return orderedList;
}

// Filtering out strings and numbers separately [AND] sorting in assending order(for string / number) [AND] calling the ordering function on them

let stringList = ordering (list.filter(str => typeof(str) === 'string').sort((a,b) => a-b));

let numList = ordering(list.filter(num => typeof(num) === 'number').sort((a,b) => a-b));

numList.push(stringList);

numList;


---------------------Assignment BONUS V2----------------------


const list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'2','2','3','21','21','88','88','88','4','4','4','71','11'];


// Convert to a sorted ascending ordered list
const ordering = (arr) => {
	let orderedList = arr.map(val => {
		return semiList = arr.filter(val2 => {
			return val === val2;
		})
	})

	// Convert all items in array to a string type (AND) Extracting unique items only from the array (AND) Converting back to array
	orderedList = [... new Set(orderedList.map(item => JSON.stringify(item)))].map(items => JSON.parse(items));

	// Removing single item lists (either string or number) from the main array and storing them as their data type states
	for (let i = 0; i < orderedList.length; i++){
		if ((orderedList[i].length === 1) && (typeof(orderedList[i][0]) === 'string')){
			orderedList[i] = orderedList[i][0];
		}
		else if((orderedList[i].length === 1) && (typeof(orderedList[i][0]) === 'number')){
			orderedList[i] = Number(orderedList[i]);
		}
	}
	return orderedList;
}

// Filtering out strings and numbers separately [AND] sorting in assending order(for string / number) [AND] calling the ordering function on them
let FinalList = () => {
	let stringList = ordering (list.filter(str => typeof(str) === 'string').sort((a,b) => a-b));
	let numList = ordering(list.filter(num => typeof(num) === 'number').sort((a,b) => a-b));

	numList.push(stringList);

	return numList;
} 

FinalList();