const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

updateOneHamsterById();

async function updateOneHamsterById(id) {
    console.log('Update Sixten...');
    const hamsterId = id || 'shiHHMqav5KSyhcak49L'

    const update = {
        loves: 'Dogs',
        favFood: 'Pizza',
        wins: 0,
    }
    const settings = { merge: true }
    await db.collection(HAMSTERS).doc(hamsterId).set(update, settings)
}