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
        foods.splice(index1, 1);
    }



console.log(`Exercise 4 result`, foods);

//#5
const index2 = foods.indexOf(`pizza`);

if (index2 !==-1) {
    foods.splice(index2 +1, 0, `tofu`);
}

console.log(`Exercise 5 result`, foods);



