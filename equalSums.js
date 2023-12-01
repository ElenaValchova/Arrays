function equalSum(arr) {
    let result = 'no';

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = arr.length - 1; k > i; k--) {
            rigthSum += arr[k];
        }
        if (leftSum === rigthSum) {
            result = i;
            break;
        }
    }
    console.log(result);
}

// equalSum([1, 2, 3, 3]);
equalSum([1, 2]);