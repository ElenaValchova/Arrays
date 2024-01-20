function lastK(length, kNum) {
    let arr = [1];

    for (let i = 1; i < length; i++) {
        let index = Math.max(arr.length - kNum, 0);
        let lastElement = arr.slice(index)
        let sum = 0;

        for (let el of lastElement) {
            sum += el
        }

        arr.push(sum)
    }

    console.log(arr.join(" "));
}

// lastK([6, 3]);
lastK([8, 2]);