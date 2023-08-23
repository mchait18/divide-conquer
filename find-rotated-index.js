function findRotatedIndex (arr, val) {
  return findIndex(arr, val)
}
function findIndex (arr, val, leftIndx = 0, rightIndx = arr.length - 1) {
  let middleIndx = Math.floor((rightIndx + leftIndx) / 2)
  if (arr[middleIndx] === val) return middleIndx
  else if (leftIndx <= rightIndx) {
    if (val < arr[middleIndx] && val > arr[0]) {
      return findIndex(arr, val, leftIndx, middleIndx - 1)
    } else if (val > arr[middleIndx] || val < arr[0]) {
      return findIndex(arr, val, middleIndx + 1, rightIndx)
    }
  } else return -1
}
module.exports = findRotatedIndex
