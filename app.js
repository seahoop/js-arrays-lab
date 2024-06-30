//#2
const foods = [`pizza`, `cheeseburger`];

console.log(`Exercise 2 result;`, foods);

//#3
foods.unshift(`taco`);

console.log(`Exercise 3 result`, foods);

//#4
const index1 = foods.indexOf(`pizza`);

if(index1 !==-1)
    {
        favFoods = foods[index1];
    }



console.log(`Exercise 4 result`, favFoods);

//#5
const index2 = foods.indexOf(`cheeseburger`);

if (index2 !==-1) {
    foods.splice(index2 + 1, 0, `tofu`);
}

console.log(`Exercise 5 result`, foods);

//#6 replace `pizza` and add `sushi` and `cupcake`
const index3 = foods.indexOf(`pizza`);

if (index3 !== -1){
    foods.splice(index3, 1, `sushi`, `cupcake`);
}

console.log(`Exercise 6 result`, foods);


//#7 slice(method) create a new arry that contains `sushi` and `cupcake`
// then assign it to an variable name `yummy`

const yummy = foods.slice(1, 3);
console.log(`Exercise 7 result`, yummy);

//#8 use `indexOf()` method, find `tofu` in the foods array
//assign to variable name `soyIdx`.

const soyIdx = foods.slice (4, 5)
console.log(`Exercise 8 result`, soyIdx)

//#9 use `join()`to concatenate string in the `foods`array separated
//by `->`. assign result to variable called `allFoods`
//final result should be as `taco->sushi->cupcake->tofu->cheeseburger`


const allFoods = foods.join(`->`);

console.log(`Exercise 9 result;`, allFoods);

//#10 use .includes() method see if the `foods` array contain string
//`soup`, assign the result to variable called `hasSoup`.

const hasSoup = foods.includes(`soup`);

console.log(`Exercise 10 result;`, hasSoup);

//#11 choose a method to iterate the `nums` array, push odd number to 
//new array name `odds`, initialize the `odds` to an empty array before 
//it

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds =[];

nums.forEach((num) => {
    if(num % 2 !== 0){
    odds.push(num);
    }
});
console.log(`Exercise 11 result;`, odds)


//#12 choose a method to iterate through the `nums` array,
//when looping sort the numbers into new arrays based in the following
//-push any number evenly divisible by 3 to an array called `fizz`
//push any number evenly divisible by 5 to an array called `buzz`
//push numbers divisible by 3 and 5 to array called `fizzbuzz`
//a single may meet more than one of the above rules. if it does 
//it should be placed in multiple arrays. for example the number 
//`15` will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays. 
// buzz fizzbuzz
const fizz =[];
const buzz =[];
const fizzbuzz =[];

nums.forEach((num) => {
    if(num % 3 === 0){
        fizz.push(num);
    }
    if(num % 3 ===0){
        buzz.push(num);
    }
    if(num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
});

console.log(`Exercise 12 Results`);
console.log( `fizz:`, fizz);
console.log( `buzz`, fizz);
console.log( `fizzbuzz`, fizzbuzz);



//#13

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays.slice(-1)[0];
console.log(`Exercise 13 Result;`, numList);

//#14
//1) Retrieve the number `66` from the `numArrays` array. As part of this process
//do not alter the original `numArrays` array.
//2) Assign it to a variable called `num`.
const num = numArrays[2][1];
console.log(`Exercise 14 result;`, num);


//#15

let total = 0;

numArrays.forEach(innerArray => {
    innerArray.forEach(num =>{
        total += num;
    });
});

console.log(`Exercise 15 result:\n`, total);
















