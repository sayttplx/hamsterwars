const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

async function updateOneHamsterById(id) {
    console.log('Update Sixten...');
    const hamsterId = id 

    const update = {
        loves: 'apple',
        favFood: 'asdfgsss',
        wins: 0,
    }
    const settings = { merge: true }
    await db.collection(HAMSTERS).doc(hamsterId).set(update, settings)
    console.log('Sixten is updated!');

    const hamster = await db.collection(HAMSTERS).doc(hamsterId).get()
    console.log(hamster.data())
    return hamster.data()
}

module.exports = { updateOneHamsterById }