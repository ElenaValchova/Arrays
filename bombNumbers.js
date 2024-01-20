function bombNumbers(numbers, bombInfo) {

    let bombNum = bombInfo[0];
    let power = bombInfo[1];
    
    while(numbers.includes(bombNum)) {
        let index = numbers.indexOf(bombNum);

        numbers.splice(index - power, power * 2 + 1, 0);
    }

    let sum = 0;
    for (let num of numbers){
        sum += num
    }

    console.log(sum)
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])