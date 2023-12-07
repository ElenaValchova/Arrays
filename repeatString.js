function repeatSting(text, numRepeats) {
    let result = "";
    for (let i = 0; i < numRepeats; i++) {
        result = concatenate(result, text);
    }
    console.log(result);

    function concatenate(a, b) {
        return a += b;
    }
}

repeatSting("abc", 3);