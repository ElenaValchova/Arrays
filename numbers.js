function numbers(input) {
    let arr = input[0].split(" "). map(Number);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        sum += curNum;
    }

    let avg = sum / arr.length;

    let topNums = arr.filter(num => num > avg).sort((a, b) => b -a).slice(0, 5);

    if (topNums.length == 0) {
        console.log("No");
    } else {
        console.log(topNums.join(" "));
    }
    
}

// numbers(['10 20 30 40 50']);
numbers(['5 2 3 4 -10 30 40 50 20 50 60 60 51'])
// numbers(["1"]);
// numbers(['-1 -2 -3 -4 -5 -6']);