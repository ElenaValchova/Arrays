function sorting(input) {
    let sortedArr = input.sort((a,b) => a - b);
    let final = [];
    while (sortedArr.length > 0) {
        let max = sortedArr.pop();
        let min = sortedArr.shift();

        final.push(max, min);

    }
    console.log(final.join(" "));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);