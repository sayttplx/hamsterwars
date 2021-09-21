const { db } = require('../firebase');
const HAMSTERS = 'hamsters';
const validate = require('../validators/isHamsterUpdateObject');
const validateHamster = require('../validators/isHamsterObject');



exports.getAllHamsters = async (req, res) => {

    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if (hamstersSnapshot.empty) {
        return arr;
    }

    const arr = [];

    await hamstersSnapshot.forEach(async hamsterRef => {
        const hamster = await hamsterRef.data();
        hamster.id = hamsterRef.id;
        arr.push(hamster);
    });
    res.send(arr);
}


exports.getRandomHamster = async (req, res) => {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if (hamstersSnapshot.empty) {
        res.sendStatus(400);
        return;
    };

    const arr = [];

    hamstersSnapshot.forEach(async hamsterRef => {
        arr.push(hamsterRef.data());
    });

    const randomHamster = arr[Math.floor(Math.random() * arr.length)];

    res.send(randomHamster);
}


exports.getHamsterById = async (req, res) => {

    const hamsterId = req.params.id;

    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if (hamsterSnapshot.exists) {
        const hamster = await hamsterSnapshot.data();
        hamster.id = hamsterSnapshot.id;
        res.send(hamster);
    } else {
        res.sendStatus(404);
    }
}

exports.updateOneHamsterById = async (req, res) => {

    if (!validate(req.body)) {
        res.sendStatus(400);
        return;
    }

    const hamsterId = req.params.id;
    const hamster = req.body;

    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if (hamsterSnapshot.exists) {
        await db.collection(HAMSTERS).doc(hamsterId).update(hamster);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
};

exports.deleteOneHamsterById = async (req, res) => {

    const hamsterId = req.params.id;
    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if (hamsterSnapshot.exists) {
        await db.collection(HAMSTERS).doc(hamsterId).delete();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
}


exports.getCutestHamster = async (req, res) => {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if (hamstersSnapshot.empty) { res.sendStatus(400); return; };

    const arr = [];

    hamstersSnapshot.forEach(async hamsterRef => {
        arr.push(hamsterRef.data());
    });

    let newHamsterArray = [];   
    let percentage; 
    let cutestHamster = [];
    let highestPercentage;

    arr.forEach(hamster => {
        if (hamster.games > 0) {        // if the hamster has played at least one game
            percentage = hamster.wins / hamster.games * 100  // calculate the percentage of wins
            hamster.procent = percentage + '%'; // add the procent to the hamster
            newHamsterArray.push(hamster) // add the hamster to the new hamster array
            if (highestPercentage !== hamster.perc) { // if the procent is higher than the highest procent
                highestPercentage = Math.max(...newHamsterArray.map(hamster => hamster.procent))    // set the highest procent to the new procent
                if (hamster.procent === highestPercentage) {    // if the procent is the highest
                    cutestHamster = [hamster];  // set the cutest hamster to the current hamster
                }
            } else {
                cutestHamster.push(hamster)     // if the procent is the same as the highest procent
            }
        }
    });


    res.status(200).send(cutestHamster);
}













exports.addOneHamster = async (req, res) => {

    if (!validateHamster(req.body)) {
        res.sendStatus(400);
        return;
    }
    const hamsterRef = await db.collection(HAMSTERS).add(req.body);
    const newHamster = { id: hamsterRef.id }
    return res.status(200).send(newHamster);
}
