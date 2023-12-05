function nonDecreasingSubset(input) {
    let newArray = [];

    let maxNumber = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < input.length; i++) {
        let curNumber = Number(input[i]);
      
        if (curNumber > maxNumber) {
            maxNumber = curNumber
            newArray.push(maxNumber);
        }

        for (let second = i + 1; second < input.length; i++) {
            let secondNumber = Number(input[second]);

            if (maxNumber > secondNumber) {
                break;
            } else if (secondNumber >= maxNumber) {
                newArray.push(secondNumber);
                maxNumber = secondNumber;
                break;
            }
    
        }
    }
    console.log(newArray.join(" "));   
}

// nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);