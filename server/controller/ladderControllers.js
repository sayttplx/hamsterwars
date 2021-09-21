const { db } = require('../firebase');
const HAMSTERS = 'hamsters';


exports.getWinners = async (req, res) => {
    let getHamsters = await db.collection(HAMSTERS).orderBy('wins', 'desc').limit(5).get()
    console.log(getHamsters)
    const topHamsters = [];
    getHamsters.forEach(doc => {            
        topHamsters.push(doc.data()); 
        console.log(topHamsters)      
    })
    res.status(200).send(topHamsters) 
}

exports.getLosers = async (req, res) => {
    let getHamsters = await db.collection(HAMSTERS).orderBy('defeats', 'desc').limit(5).get()
    console.log(getHamsters)
    const bottomHamsters = [];
    getHamsters.forEach(doc => {            
        bottomHamsters.push(doc.data());      
        console.log(bottomHamsters)  
    })
    res.status(200).send(bottomHamsters) 
}
