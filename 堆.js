1. 建立maxHeap, 以倒数第二层((len/2) -1)为起点, 逐个与左右比较,左右大则交换位置
    直到顶点
2. 疑点: 为什么要循环? 一次比较就应该得出最大值了  不循环会产生错误结果
3. 答案: 每次交换 max,与 index , 原本 left/right 的下一层就需要再排序.
4. 要等到交换时下属完全符合规则再停止
    这样每一个点都比上一级的点大
5. 完成后  从数组最后一项开始, 与当前最大值交换数字, 交换后数组长度-1
6. 此时第一项就不是最大值了, 需要再次建立 maxHeap
而且不能将已经是最大值的最后一项算进去, 故 buildMaxHeap 有一个参数是 length 来控制


function heapSort(arr) {
  function swap(arr, p1, p2) {
    var temp
    temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
    return arr
  }

  function swapMax(arr, index, length) {
    //从尾部开始, 推算出倒数第二层
    //从倒数第二层开始检测大小
    //每次3个数值中把最大的放到上面
    //这样做无法保证排序, 只能保证最终 arr[0]为最大值
    var iMax, iRight, iLeft

    while (true) {  //比较的不只是3个数字, 交换下层就不一定比下下层大了, 需要再比较
      iMax = index
      iLeft = 2 * index + 1 //数组为 zero-based
      iRight = 2 * index + 2 //故每次要加1
      if (arr[iLeft] > arr[iMax] && iLeft < length) {
        iMax = iLeft
      }
      if (arr[iRight] > arr[iMax] && iRight < length) {
        iMax = iRight
      }
      if (iMax !== index) {
        swap(arr, iMax, index)  //只是换了位置, iMax/index 的值完全没变
        index = iMax    //??????????  好像是保存给下一步
        //换值之后 index 没有变化, 故 index 指向的是 left/right, 而不是 max
      } else {
        break
      }
    }

  }

  function buildMaxHeap(arr) {
    var iParent = Math.floor(arr.length / 2) - 1
    for (var j = iParent; j >= 0; j--) {
      swapMax(arr, j, arr.length)
    }
  }

  function sortMax(arr) {
    buildMaxHeap(arr)
    for (var i = arr.length - 1; i > 0; i--) {
      swap(arr, i, 0)
      swapMax(arr, 0, i)
    }
    return arr
  }
  return sortMax(arr)
}
var myArr = [2, 34, 67, 496, 133, 1345, 5943, 1, 6, 325, 34, 78]
heapSort(myArr)
