const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

getRandomHamster();

async function getRandomHamster() {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if (hamstersSnapshot.empty) {
        console.log('No hamster found!');
        return;
    };

    const arr = []
    hamstersSnapshot.forEach(hamster => {
        arr.push(hamster.data())
    })

    const randomHamster = arr[Math.floor(Math.random() * arr.length)]
    console.log('Found: ', randomHamster);
    return arr;
};