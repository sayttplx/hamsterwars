const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

updateOneHamsterById()

async function updateOneHamsterById(id) {
    console.log('Update Sixten...');
    const hamsterId = id 

    const update = {
        name: 'Lisa',
        age: 1,
        imgName: 'hamster-1.jpg',
        loves: 'walks',
        favFood: 'chips',
        wins: 0,
        defeats: 0,
        games: 0,
    }
    const settings = { merge: true }
    await db.collection(HAMSTERS).doc(hamsterId).set(update, settings)

    const hamster = await db.collection(HAMSTERS).doc(hamsterId).get()
    return hamster.data()
}

