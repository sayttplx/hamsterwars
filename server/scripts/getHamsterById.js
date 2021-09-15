const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

getHamsterById();

async function getHamsterById(id) {
    console.log('Looking for Sixten...');
    const hamsterId = id || 'shiHHMqav5KSyhcak49L'

    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get()

    if (!hamsterSnapshot.exists) {
        console.log('Could not find him!');
        return
    }
    const hamster = await hamsterSnapshot.data()
    console.log('Found: ', hamster);
    return hamster
}

module.exports = getHamsterById