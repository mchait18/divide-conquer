function countZeroes (arr) {
  let rightIndx = arr.length - 1
  let leftIndx = 0
  let zeroStart = 0
  if (arr[arr.length - 1] === 1) return 0
  if (arr[0] != 0) {
    while (rightIndx !== leftIndx) {
      let middleIndx = Math.floor((rightIndx + leftIndx) / 2)

      if (arr[middleIndx] === 1) {
        if (arr[middleIndx + 1] === 0) {
          zeroStart = middleIndx + 1
        }
        leftIndx = middleIndx + 1
      } else if (arr[middleIndx] === 0) {
        if (arr[middleIndx - 1] === 1) {
          zeroStart = middleIndx
        }
        rightIndx = middleIndx - 1
      }
    }
  }
  return arr.length - zeroStart
}
module.exports = countZeroes
