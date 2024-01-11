function computerStore(input) {
    let index = 0;
    let price = input[index];

    let sum = 0;

    while (price != "special" && price != "regular") {

        if (Number(price < 0)) {
            console.log("Invalid price!");
            
        } else if (Number(price) == 0) {
            console.log("Invalid order!");
    
        } else {
            sum += Number(price);
        }

        index++;
        price = input[index];
    }

    let tax = sum * 0.20;
    let totalSum = sum + tax;

    if (price == "special") {
        totalSum *= 0.90;
    }
    if (totalSum > 0) {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalSum.toFixed(2)}$"`);
    } else {
        console.log("Invalid order!");
    }
}

computerStore([

    'regular'
    
    ])