const { db } = require('../firebase')
const HAMSTERS = 'hamsters'


deleteHamsterById(id)

async function deleteHamsterById(id) {
	console.log('Deleting a document...');
	const docId = id || 'IgGcFb3glpaM27C7DYK6'

	const docRef = db.collection(HAMSTERS).doc(docId)
	const docSnapshot = await docRef.get()
	const deleted = docSnapshot
	if (deleted.exists) {
		await docRef.delete()
		console.log('Document deleted.');
		return deleted

	} else {
		console.log('Document not found.');
	}
}
