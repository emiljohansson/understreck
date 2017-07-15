

var currentId = 0

function uniqueId() {
    var id = ++currentId
    return id
}

export default uniqueId
