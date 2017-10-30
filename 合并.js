//将数组分为两部分, 循环二分直至每个数组只有一个数字, 此时比较单个数字的数组, 谁大谁 push 进结果, 产生两个数字的已排序数组
//将这个数组与其他已排序的数组或单个数字的数字(也算排好了)结合
//此时的问题是如何写一个对两个已排序数组进行合并 + 排序的函数
//循环步骤

//妈的写了注释自己也看不大懂
//关键是"切割后组合形成已排序的数组, 这样循环"
function tearArr(arr) {
  if (arr.length < 2) {
    return arr
  }
  var middle = Math.floor(arr.length/2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle)
  return merge(tearArr(left), tearArr(right))  //这一行是关键
}

//merge 函数对已排序好的数组进行合并
function merge(left, right) {
  var result = []
  while (left.length > 0 && right.length > 0) { //一开始用的或, 当数据等于 undefined 时无限循环
    //阮一峰使用两个变量控制进度, 每次对比大小后对应变量++
    if (left[0] > right[0]) {
      result.push(right[0])
      right.shift()
    } else {
      result.push(left[0])
      left.shift()
    }
  }
  return result.concat(left).concat(right)
  //另外一种选择: 不 concat, 检测 length 值是否存在, push 进 result,代码会变长
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
tearArr(myArr)
