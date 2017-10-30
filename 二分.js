//不知道在交换位置后如何使其他元素 index 后移
//保存最后一个元素后使用一个 for 循环,从右到左 arr[i] = arr[i-1],
function binarySort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i]  //欲排序变量
    var min = 0
    var max = i - 1
    while (min <= max) {
      var middle = Math.floor((min + max) / 2)
      if (arr[i] > arr[middle]) {
        min = middle + 1 //最终会使 min/max/mid 三者重合, 再分开
      } else {
        max = middle - 1
      }
    }
    for (var j = i - 1; j > min; j--) {
      arr[j + 1] = arr[j] //留出空间
    }
    arr[min] = temp //交换位置
  }
  return arr
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
binarySort(myArr)
