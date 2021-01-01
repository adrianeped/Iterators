const list = [1,2,3,4,5,6,7,8,9,10];
const double = list.map((element) => element * 2).map((element) => element * 3);
const even = list.filter((element) => element % 2 === 0).filter((element) => element > 5);
const sum = list.reduce((acc, element) => {
    return (acc + element);
}, 0)

const cats = [
    {
    name: "Caetano", weight: 7, color: "black", age: 1, gender: "M"
}, {
    name: "Maurício", weight: 6, color: "white", age: 1, gender: "M"
}, {
    name: "Ágata", weight: 1, color: "black, white and brown", age: 0, gender: "F"
}, {
    name: "Lilith", weight: 5, color: "white and brown", age: 0, gender: "F"
}];

const age = cats.filter((element) => element.age >= 1);

const name = cats.map((element) => element.name);

const youngCats = cats.filter((element) => element.age < 1).map((element) => element.name);

const maleCatWeight = cats
    .filter((element) => element.gender === "M")
    .map((element) => element.weight)
    .reduce((acc, element) => {
        return(acc + element);
    }, 0);

console.log(maleCatWeight);

