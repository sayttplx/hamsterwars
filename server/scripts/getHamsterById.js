const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

async function getHamsterById(id) {
    console.log('Looking for Sixten...');
    const hamsterId = id

    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get()

    if (!hamsterSnapshot.exists) {
        console.log('Could not find him!');
        return null
    }
    const hamster = await hamsterSnapshot.data()
    return hamster;
}



module.exports = { getHamsterById }