function magicSum(arr, magicSum) {
    for (let i = 0; i < arr.length; i++) {
        let curDigit = arr[i];
        let magicNumbers = [];
        
        for (let k = i + 1; k < arr.length; k++) {
            let secondCur = arr[k];
            let sum = 0;
            sum += curDigit + secondCur;

            if (sum === magicSum) {
                magicNumbers.push(curDigit);
                magicNumbers.push(secondCur);
                console.log(magicNumbers.join(" "));
                break;
            }
        }
    }
}

// magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);