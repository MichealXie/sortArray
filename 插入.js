function swap(arr, p1, p2) {
  var temp
  temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
  return arr
} 

function insertSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < i - 1; j++) {
      console.log("---") //55次
      if (arr[i] < arr[j]) {
        //如何交换???
        swap(arr, i, j)
        console.log("swap ") //21次...
      }
    }
  }
  return arr
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
insertSort(myArr)

//阮一峰在这里不使用 swap 函数, 而是保存了一个临时变量逐个比较, 再赋值并不会影响, 的确从理论上讲更"插入一些",
// 我的这个有点像"选择排序"
//效率提高了. swap/j 循环的次数都减少
function insertSort2(arr) {
  for (var i = 0; i < arr.length; i++) {
    var presentNum = arr[i]
    for (var j = i - 1; j > -1; j--) { //注意 -1
      console.log("---")  //66次
      if (presentNum < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j] = presentNum
        //console.log("swap") //28次...   跟阮一峰的一样  (毕竟是抄的)
      }
    }
  }
  return arr
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
insertSort2(myArr)
//尝试优化失败, 无法像冒泡一样在某次比较中不排序就退出排序
