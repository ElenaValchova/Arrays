function oddAndEvenSum(number) {
    let numberAsString = String(number);

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let curChar = Number(numberAsString[i]);

        if (curChar % 2 == 0) {
            evenSum += curChar;
        } else {
            oddSum += curChar
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);