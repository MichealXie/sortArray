function radixSort(arr) {
  var max, maxDigit, bin
  //获取最大值max 算出其位数maxDigit
  //原版:
  // for(let i = 0; i< arr.length;i++){
  //   max = arr[0]
  //   if(arr[i] > max) max = arr[i]
  // }
  max = Math.max(...arr)
  maxDigit = max.toString().length
  //maxDigit 次循环
  bin = []
  for (let i = 0; i < 10; i++) { //创建10个桶
    bin[i] = []
  }
  for (let k = 0; k < arr.length; k ++){
    for (let i = maxDigit; i > 0; i--) {
      //获取每个数字的对应位数  (除e 取值)
      var n = arr[k].toString()[i]  //arr[i]位数上的数字
      console.log(n)
      bin[n].push(arr[i])
      console.log(arr[i])
    }
  }
  //分配到桶
  //合并桶
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]

radixSort(myArr)

//想不到一个获取对应位数数字的方法....
//先放弃
//想到一个笨方法:
// var a = 12345
// a.toString()
// +a[2]//3
//上面的方法只对同位的数字有效...
