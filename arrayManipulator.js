function arrayManipulator(arr, commands) {

    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(" ");
        let curCommand = tokens[0];

        if (curCommand == "add") {
            let index = Number(tokens[1]);
            let num = Number(tokens[2]);
            arr.splice(index, 0, num);
        } else if (curCommand == "addMany") {
            let index = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,);
            for (let num of numsToAdd) {
                arr.splice(index, 0, num);
                index++;
            }
        } else if (curCommand == "contains") {
            let num = Number(tokens[1]);
            let index = arr.indexOf(num);
            console.log(index);
        } else if (curCommand == "remove") {
            let index = Number(tokens[1]);
            arr.splice(index, 1,);
        } else if (curCommand == "shift") {
            let possition = Number(tokens[1]);

            for (let i = 1; i <= possition; i++){
                let curNum = arr.shift();
                arr.push(curNum);
            }
        } else if (curCommand == "sumPairs") {
            let pairedSum = [];

            for (let i = 0; i < arr.length; i += 2) {
                if (i + 1 < arr.length) {
                    pairedSum.push(arr[i] + arr[i + 1]);
                }
            }
        } else if (curCommand == "print") {
            console.log(`[ ${arr.join(", ")} ]`);
        }
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7],

//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulator([1, 2, 3, 4, 5],

//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
    
//     'shift 1', 'print'])

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])