function printElemnet (arr) {
    let lastElemant = Number(arr[arr.length -1]);
    let newArray = [];

    for (let i = 0; i < arr.length - 1; i+= lastElemant) {
        let curDigit = arr[i];
        newArray.push(curDigit)
    
    }
    console.log(newArray.join(" "));
}


// printElemnet(['5', '20', '31', '4', '20', '2']);
// printElemnet(['dsa', 'asd', 'test', 'test', '2']);
printElemnet(['1', '2', '3', '4', '5', '6']);