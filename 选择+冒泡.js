//写一个交换位置的函数: 输入目标数列与欲交换的 index 即可返回交换号的数组
function swap(arr, p1, p2) {
  var temp
  temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
  return arr
}

//1.选择排序:
function selectionSort1(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    var min = i
    for (var j = i + 1; j < arr.length; j++) {  //j 一直在"墙"的分界线处
      console.log("---")  //66次
      if (arr[min] > arr[j]) {
        swap(arr, min, j) //说起来这个函数真的好用...
         console.log("swap " + arr[min] +" " + arr[j])
      }
    }
  }
  return arr
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
selectionSort1(myArr) //[1, 2, 6, 34, 34, 67, 78, 133, 325, 496, 1345, 5943]

//选择排序2: 创建新数组...不用想性能肯定差, 但就是想写
function selectionSort2(arr) {
  var result = []
  for (var i = arr.length; i > 0; i--) {  //这个可不能-1, 新数组会直接少一个的
    var min = 0
    for (var j = i - 1; j > 0; j--) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    result.push(arr[min])
    arr.splice(min, 1)
  }
  return result
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
selectionSort2(myArr) //[1, 2, 6, 34, 34, 67, 78, 133, 325, 496, 1345, 5943]

//方方的选择排序:
function selectionSort3(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    var min = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j     //先记录
      }
    }
    swap(arr,i,min)  //再交换
  }
  return arr
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
selectionSort3(myArr) //[1, 2, 6, 34, 34, 67, 78, 133, 325, 496, 1345, 5943]

//无优化冒泡:
function bubbleSort1(arr){
  for(var i = 0; i < arr.length-1; i++){
    for(var j = 0; j < arr.length; j++){
      console.log("---")    //132次循环
      if(arr[j] > arr[j+1]){
        swap(arr, j+1, j)
    }
    }
  }
  return arr
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
bubbleSort1(myArr)

//优化冒泡:exchange 可为 bool/ 简单的0 or 1
function bubbleSort2(arr) {
  for(var i = 0; i < arr.length-1; i++){  //修改成-1, 应该没啥问题, 因为循环次数为总长度-1
    var exchange = 0
    for (var j = 0; j < arr.length; j++) {  //其实不大明白为什么是 length而不是len-1
      console.log("---")  //96次判断
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j)
        exchange += 1
      }
    }
    if(exchange === 0) {
      break
    }
  }
  return arr
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
bubbleSort2(myArr)

//然而....算法的重复次数还是过多...因为 j 经常重复已经排序好的数字
//修改下:
function bubbleSort3(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = arr.length; j > (i-1); j--){
      //for(var j = 0;j<arr.length - i - i; j++)   66次
      //上式的-1是为了 j与 j+1,  -i 是不重复已排序数字
      console.log("---")  //90次循环
      if(arr[j] > arr[j+1]){
        swap(arr, j+1, j)
    }
    }
  }
  return arr
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
bubbleSort3(myArr)

//版本4  当不交换数据时 break
function bubbleSort4(arr) {
  for(var i = 0; i < arr.length-1; i++){  //修改成-1, 应该没啥问题, 因为循环次数为总长度-1
    var exchange = 0
    for (var j = arr.length; j > (i-1); j--) {  //其实不大明白为什么是 length而不是len-1
      console.log("---")  //70次判断
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j)
        exchange += 1
      }
    }
    if(exchange === 0) {
      break
    }
  }
  return arr
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
bubbleSort4(myArr)
