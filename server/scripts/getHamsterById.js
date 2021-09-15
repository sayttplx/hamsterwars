const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

getHamsterById();

async function getHamsterById(id) {
    console.log('Looking for Sixten...');
    const hamsterId = id || 'shiHHMqav5KSyhcak49L'

    const hamster = await db.collection(HAMSTERS).doc(hamsterId).get()

    if (!hamster.exists) {
        console.log('Could not find hamster!');
        return
    }
    const hamster = await hamster.data()
    console.log('Found: ', hamster);
    return hamster
}

module.exports = getHamsterById