function addSubtract(num1, num2, num3) {
    let resultSum = add(num1, num2);
    let resultSubtract = subtract(resultSum, num3);
    
    console.log(resultSubtract);

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(sum, num3) {
        return sum - num3;

    }
}

addSubtract(23, 6, 10);