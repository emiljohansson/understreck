let currentId = 0

function uniqueId () {
  const id = ++currentId
  return id
}

export default uniqueId
