const { db } = require('../firebase')
const HAMSTERS = 'hamsters'

addOneHamster();

async function addOneHamster() {
	console.log('Add a new hamster...');
	const object = {
        name: 'Hamster',
        age: 1,
        imgName: 'hamster-1.jpg',
        loves: 'pokemon',
        favFood: 'grass',
        wins: 0,
        defeats: 0,
        games: 0,

	}

	const hamsterRef = await db.collection(HAMSTERS).add(object)
	console.log('Added hamster with the id ' + hamsterRef.id);
}