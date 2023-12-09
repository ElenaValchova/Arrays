function check(numOne, numTwo, numTree, numFour) {
    let arr = [];
    arr.push(numOne, numTwo, numTree, numFour);

    let countNegative = 0;
    
    for (let i = 0; i < arr.length; i++){
        let curDigit = arr[i];

        if (curDigit <= 0){
            countNegative++
        }
    }


    if (countNegative == 1 || countNegative % 3 == 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

check(-5, -12, -15,);