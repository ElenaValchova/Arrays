function mathPower(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result = multiply(result, number);
    }
    console.log(result);
    
    function multiply(a, b) {
        return a * b;
    }
}

mathPower(3, 4);