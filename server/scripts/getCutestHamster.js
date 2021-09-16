const { db } = require('../firebase')
const HAMSTERS = 'hamsters'



async function getCutestHamster() {
    console.log('Getting cutest hamster...');

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

    const sortedHamsters = arr.sort(function (a, b) {
        return b.wins - a.wins
    })

    const cutestHamster = [];
    for (let i = 0; i < 1; i++) {
        cutestHamster.push(sortedHamsters[i])
    }

    return cutestHamster;    
}


module.exports = { getCutestHamster };

