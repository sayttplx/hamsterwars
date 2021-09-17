const admin = require('firebase-admin');

let serviceAccount;

if( proccess.env.serviceAccount ) {
  serviceAccount = JSON.parse(process.env.serviceAccount);
} else {
  const serviceAccount = require('./key.json');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db };


