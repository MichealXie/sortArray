function insertSort(arr) {
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
function creatBin(num){
  var result = []
  for(let i = 0; i < num; i++){
    result[i] = []  //初始化数组. 可换为闭包
  }
  return result
}
function shellSort(arr){  //莫名其妙写到最后变成了桶排...
  //定义 gap 并分割为多个数组
  if(arr.length <= 1){
    return arr
  }
  var group = 3
  var gap = Math.floor(arr.length/group)
  var result = creatBin(group)
  for(let i = 0; i < arr.length; i++){
    var temp = arr[i]                        //同样是双重循环分类
    for(let j =0; j < arr.length/gap; j++){  //这里和桶的区别在于桶的数据放哪由大小决定
                                             //而希尔由位置决定
      result[j] = arr.slice(j*gap,(j+1)*gap) //希尔的写法比较简洁
    }
  }
  //对数组循环使用插入排序
  for(let i = 0; i < arr.length/gap; i++){
    insertSort(result[i])
  }
  //floor(gap/2)


  return result

  //对数组循环使用插入排序
  //直到 gap =1
  //恢复数组,对整个数组进行插入排序
}

var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
shellSort(myArr)

//重来!
function shellSort2(arr) {  //又写歪了...   还不准确, 结果会错误
  var gap = arr.length / 2

  function swap(arr, p1, p2) {
    var temp
    temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
    return arr
  }

  function gapSort(arr, gap) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i + gap] && arr[i] > arr[i + gap]) {
        swap(arr, i, i + gap)
        console.log("---") //14次
      }
    }
  }
  while (gap > 0) {
    gapSort(arr, gap)
    gap = Math.floor(gap / 2)
  }
  return arr
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
shellSort2(myArr)
