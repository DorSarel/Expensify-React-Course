import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

// Create GoogleProvider - Auth with google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })

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