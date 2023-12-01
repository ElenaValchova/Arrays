function maxNumber(arr) {
    newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let curDigit = arr[i];
        let isTop = true;

        for (let index = i + 1; index < arr.length; index++) {
            let curNum = arr[index];

            if (curNum >= curDigit) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            newArray.push(curDigit);
        }
    }
    console.log(newArray.join(" "));
}

// maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17])
// maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);