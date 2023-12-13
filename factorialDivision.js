function factorialNumber(num1, num2) {
    let firstResult = resultFirstFactorial(num1);
    let secondResult = resultSecondFactorial(num2);
    // console.log(firstResult);
    let result = firstResult / secondResult;
    console.log(`${result.toFixed(2)}`);
    
    function resultFirstFactorial (num1) {
    let firstFactorial = 1;
        for (let firstNum = num1; firstNum > 0; firstNum--) {
            firstFactorial = firstFactorial *= firstNum;
        }
        return firstFactorial;
    }

    function resultSecondFactorial(num2) {
        let secondFactorial = 1;
        for (let secondNum = num2; secondNum > 0; secondNum--) {
            secondFactorial *= secondNum;
           
        }
        return secondFactorial;
    }
}

factorialNumber(6, 2);