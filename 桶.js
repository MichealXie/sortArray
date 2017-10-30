//个人优化桶排序, 可以输入桶的个数(当然修改成输入桶的步进也可以), 只排正整数(修改下也能排负数)
//桶内采用插入排序

//辅助函数: 插入排序
function insertSort(arr) {
  if (arr.length <= 1) { //空桶或只有一个的桶立马返回
    return
  }
  for (var i = 0; i < arr.length; i++) {
    var presentNum = arr[i]
    for (var j = i - 1; j > -1; j--) { //注意 -1
      console.log("---") //66次
      if (presentNum < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j] = presentNum
        //console.log("swap") //28次...   跟阮一峰的一样  (毕竟是抄的)
      }
    }
  }
  return arr
}

function binSort(arr, num) {
  //设置桶个数与初始化桶数组
  if (!num) num = 5 //默认为5个桶子
  var result = []
  for (var n = 0; n < num; n++) { //通过循环创建 n 个桶
    result[n] = []
  }
  console.log(result)
  //检测数组范围
  //再改进:
  var max = Math.max(...arr)
  var min = Math.min(...arr)
  var len = arr.length
  //改进:
  // var max = Math.max.apply(null, arr)
  // var min = Math.min.apply(null, arr)
  // var len = arr.length
  //原方法:
  // var min = arr[0]
  // var max = arr[0]
  //var len = arr.length
  // for (var i = 1; i < len; i++) {
  //   if (arr[i] > max) {
  //     max = arr[i]
  //   }
  //   if (arr[i] < min) {
  //     min = arr[i]
  //   }
  // }

  //根据总范围划分每个桶的范围
  var binRange = Math.floor((min + max) / num)
  console.log(min, max, len, binRange)
  for (var j = 0; j < len; j++) {
    //试下双重循环,数据外层桶子内层 数据 push 近数组后break
    for (var n = num - 1; n > -1; n--) { //num - 1很重要, result[num] 是不存在的
      if (binRange * n < arr[j]) {
        result[n].push(arr[j])
        break
      }
    }
    console.log(result)
  }
  //对每个桶进行排序
  for (var n = 0; n < num; n++) {
    insertSort(result[n])
  }
  console.log(result)
  //合并桶
  for (var n = 1; n < num; n++) {
    result[0] = result[0].concat(result[n])
  }
  result.length = 1 //删除其他数组
  return result[0]
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
binSort(myArr, 6)
