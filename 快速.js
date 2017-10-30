function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  var left = []
  var right = []
  var pivotIndex = Math.floor(arr.length / 2)   //随机快排: Math.random() * arr.length
  var pivot = arr.splice(pivotIndex, 1)[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
      console.log("---")
    } else {
      left.push(arr[i])
      console.log("---")
    }
  }
  return quickSort(left).concat([pivot], quickSort(right)) //这个递归似曾相识...
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
quickSort(myArr)
