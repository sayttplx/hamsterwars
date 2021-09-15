const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

getRandomHamster();

async function getRandomHamster() {
    const hamstersRef = db.collection(HAMSTERS);
    const hamsters = await hamstersRef.get();

    if (hamsters.empty) {
        console.log('No hamster found!');
        return;
    };

    const arr = []
    hamsters.forEach(hamster => {
        arr.push(hamster.data())
    })
    const randomHamster = arr[Math.floor(Math.random() * arr.length)]
    console.log('Found: ', randomHamster);
    return arr;
};