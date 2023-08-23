function findRotationCount (arr) {
  if (arr[0] < arr[arr.length - 1] || arr.length === 1) return 0
  return findPivot(arr)
}
function findPivot (arr) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1
    }
    if (arr[mid] > arr[0]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
}

module.exports = findRotationCount
