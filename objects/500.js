// Fill in the code below so that the tests pass.

const people = [];

people.push({
  name: "Saqib",
  favorite_food: "salad",
});

people.push({
  name: "Shadi",
  favorite_food: "mango",
});

people.push({
  name: "Navid",
  favorite_food: "macarons",
});

const favoriteFoods = [];
//favoriteFoods.push(people[0].favorite_food);
//favoriteFoods.push(people[1].favorite_food);
//favoriteFoods.push(people[2].favorite_food);

for (i = 0; i < people.length; i++) {
  favoriteFoods.push(people[i].favorite_food);
}
// TODO: Fill the array favouriteFoods with the favourite foods of each person.
// You must not type the strings (i.e. your solution should not involve you typing the word "salad").

console.assert(favoriteFoods.length === 3);
console.assert(favoriteFoods.includes("salad"));
console.assert(favoriteFoods.includes("mango"));
console.assert(favoriteFoods.includes("macarons"));

console.log(favoriteFoods);
