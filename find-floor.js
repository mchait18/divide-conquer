function findFloor (arr, val) {
  if (val >= arr[arr.length - 1]) return arr[arr.length - 1]
  if (val < arr[0]) return -1
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (arr[mid] === val) return arr[mid]
    else if (arr[mid] > val) right = mid
    else {
      if (arr[mid + 1] > val) return arr[mid]
      else left = mid + 1
    }
  }
}

module.exports = findFloor
