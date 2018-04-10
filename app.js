// Template literals and Default Parameters
// function favMovie(name = 'world', movie = 'The Room') {
//     console.log(`My name is ${name} and my favorite movie is ${movie}!`);
// };

// favMovie('George', 'Baby Driver');
// favMovie();

// Arrow functions
let favMovie = (name = 'world', movie = 'The Room') => `My name is ${name} and my favorite movie is ${movie}!`;

console.log(favMovie('George', 'Baby Driver'));
console.log(favMovie());

// let getFirstName = (name) => {
//     let fullName = name.split(" ");
//     return (fullName[0]);
// }
// let firstName = getFirstName('George Nguyen')
// console.log(firstName);

let getFirstName = name => name.split(" ")[0];

let firstName = getFirstName('George Nguyen')
console.log(firstName);

let math = (num1, num2) => {
    return {
        square: (num1 * num2) * (num1 * num2),
        product: num1 * num2
    }
};

let obj = math(3, 2);
console.log(`The square result is ${obj.square}`);
console.log(`The product result is ${obj.product}`);

let user = {

};

let person = (name, location, favFood) => {
    return {
        name: name,
        location: location,
        favFood: favFood
    }

}
let mySelf = ['George Nguyen', 'Trussville', 'Pho'];

let mySelfList = person(...mySelf);
console.log(mySelfList);

let name = 'George';

let spreadName = name => [...name];

let myName = spreadName(name);

console.log(myName);

for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}