function order(product, quantity) {
    let totalSum = 0;
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    switch(product) {
        case "coffee": totalSum = sum(totalSum, quantity, coffee);
            break;
        case "water": totalSum = sum(totalSum, quantity, water);
            break;
        case "coke": totalSum = sum(totalSum, quantity, coke);
            break;
        case "snacks": totalSum = sum(totalSum, quantity, snacks);
            break;
        
    }

    console.log(`${(totalSum).toFixed(2)}`);

    function sum(a, b, c) {
        return a = b * c;
    }
}

order("coffee", 2);