// const person = {
//     name: 'Dor',
//     age: 24,
//     location: {
//         city: 'Netanya',
//         temp: 30
//     }
// };

// // Destruct
// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const { city, temp: T } = person.location;
// if (city && T) {
//     console.log(`It's ${T} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
       
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


//
// Array destructuring
//

// const address = ['12 Zoomerstin', 'Netanya', 'Israel'];
// const [, city, state] = address; // Without the first item

const item = ['Coffe (hot)', '$2.00', '2.50$', '$2.75'];

const [coffe, , medium] = item;
console.log(`A medium ${coffe} costs ${medium}`);