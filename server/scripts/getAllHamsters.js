const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

 async function getAllHamsters() {
    console.log('Getting all hamsters...');

    const hamstersRef = db.collection(HAMSTERS);

    const hamstersSnapshot = await hamstersRef.get()            

    if (hamstersSnapshot.empty) {
        console.log('No hamsters found.');
        return arr;
    }
    
    const arr = []

    await hamstersSnapshot.forEach(async hamstersRef => {

        const hamster = await hamstersRef.data()
        console.log('hamster', hamster)
        hamster.id = hamstersRef.id
        console.log('hamster id', hamster.id)
        arr.push(hamster)
    })

    console.log('Hamsters from database:', arr);
    return arr
}

module.exports = { getAllHamsters }