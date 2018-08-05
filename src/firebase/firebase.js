import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD_i91Vsb2neo-EQKyFqbpAx5cCxvmyiUw",
    authDomain: "expensify-783ff.firebaseapp.com",
    databaseURL: "https://expensify-783ff.firebaseio.com",
    projectId: "expensify-783ff",
    storageBucket: "expensify-783ff.appspot.com",
    messagingSenderId: "580395510595"
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 3000,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Gas Bill',
//     note: '',
//     amount: 100,
//     createdAt: 1000
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 10000,
//     createdAt: -100
// });


// database.ref().on('value', (snapshot) => {
//     const obj = snapshot.val();
//     console.log(`${obj.name} is ${obj.job.title} at ${obj.job.company}`);
// });

// database.ref().set({
//     name: 'Dor Sarel',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Boston',
//         country: 'USA'
//     },
//     tasks: [{
//         description: 'First Task',
//         startDate: 0
//     }]
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });