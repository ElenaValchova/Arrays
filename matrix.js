function matrix(number) {
    // for(let i = 1; i <= number; i++) {
    //     let curRow = "";
    //     for (let i = 1; i <= number; i++)  {
    //        curRow += number + " "
    //     }
    //     console.log(curRow);
    // }

    for (let i = 1; i <= number; i++) {
        let curRow = `${number} `.repeat(number);
        console.log(curRow);
    }
}

matrix(7);