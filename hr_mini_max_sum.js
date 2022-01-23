function miniMaxSum(arr) {
    // Write your code here
    var min = 0
    var max = 0
    for (let i = 0; i < arr.length; i++) {
        if (i <= 3) {
            min += arr[i]
            max += arr[i]
        }
        else {
            var min2 = min - Math.max.apply(null, arr)
            var max2 = max - Math.min.apply(null, arr)
            min2 += arr[i]
            max2 += arr[i]
        }
    }
    if (min > min2) {
        min = min2
    }
    if (max < max2) {
        max = max2
    }
    console.log(min + " " + max)
}