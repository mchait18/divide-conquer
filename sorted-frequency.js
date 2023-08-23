function sortedFrequency (arr, val) {
  if (arr[arr.length - 1] < val) return -1
  else return findCount(arr, val)
}
function findCount (arr, val, rightIndx = arr.length - 1, leftIndx = 0) {
  let count = 0
  let middleIndx = Math.floor((rightIndx + leftIndx) / 2)

  if (arr[middleIndx] === val) {
    count++
    let i = middleIndx + 1
    while (arr[i] === val) {
      count++
      i++
    }
    i = middleIndx - 1
    while (arr[i] === val) {
      count++
      i--
    }
    return count
  } else if (arr[middleIndx] < val) {
    return findCount(arr, val, rightIndx, middleIndx + 1)
  } else if (arr[middleIndx] > val) {
    return findCount(arr, val, middleIndx - 1, leftIndx)
  }
}

module.exports = sortedFrequency
