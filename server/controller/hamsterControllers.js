const { db } = require('../firebase');
const HAMSTERS = 'hamsters';
const validate = require('../validators/isHamsterUpdateObject');
// const validateHamster = require('../validators/isHamsterObject');



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

    if(hamsterSnapshot.exists) {
        await db.collection(HAMSTERS).doc(hamsterId).update(hamster);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
};

exports.deleteOneHamsterById = async (req, res) => {

    const hamsterId = req.params.id;
    const hamsterSnapshot = await db.collection(HAMSTERS).doc(hamsterId).get();

    if(hamsterSnapshot.exists) {
        await db.collection(HAMSTERS).doc(hamsterId).delete();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    };
}

exports.getCutestHamster = async (req, res) => {
    const hamstersRef = db.collection(HAMSTERS);
    const hamstersSnapshot = await hamstersRef.get();

    if (hamstersSnapshot.empty) {
        res.sendStatus(400);
        return;
    };

    const arr = [];
    hamstersSnapshot.forEach( hamster => {
        arr.push(hamster.data());
    });

    const sortedHamsters = arr.sort((a, b) => {
        return b.wins - a.wins;
    })

    const cutestHamster = [];
    for (let i = 0; i < 1; i++) {
        cutestHamster.push(sortedHamsters[i]);
    }
    res.send(cutestHamster);
};


exports.addOneHamster = async (req, res) => {

    
    const hamster = req.body;
    const hamstersRef = db.collection(HAMSTERS);
    await hamstersRef.add(hamster);
    res.sendStatus(200);
}


