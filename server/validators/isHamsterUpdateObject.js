const isHamsterUpdateObject = (obj) => {
    if ( (typeof obj) !== 'object') {
        return false
    }
    const keys = Object.keys(obj)
    const value = Object.values(obj)

    if( !keys.includes('wins') || !keys.includes('defeats') || !keys.includes('games')) {
        return false
    }

    const filter = value.filter( x => (typeof x === 'number') )
    return filter.length === 3
}

module.exports = isHamsterUpdateObject
