function equalNumbers(arr) {
    let maxEqual = [];
    let current = [];
    let currentValue = -1

    for (let i = 0; i < arr.length; i++) {
    
        if (arr[i] === currentValue){
            current.push(arr[i]);
        } else {
            currentValue = arr[i];
            current = [currentValue];
        }
        if (current.length > maxEqual.length) {
            maxEqual = current;
        }
    }
    console.log(maxEqual.join(" "));
}

// equalNumbers([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
equalNumbers([1, 1, 1, 2, 3, 1, 3, 3]);