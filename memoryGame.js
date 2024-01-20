function memoryGame(input) {
    let arr = input.shift().split(" ").map(Number);
    console.log(arr);
    let element = 0;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = Number(tokens[0]);
        let index2 = Number(tokens[1]);

        if (command == "end") {
            break;
        }
        
        for (let j = 0; j < arr.length; j++) {
            let firstEl = arr[j]
            j++;
            let second = arr[j];
        

            if (command >= 0 && command < arr.length && index2 >= 0 && index2 < arr.length) {
                if (firstEl == second) {
                    arr.splice(command, 1);
                    arr.splice(index2, 1);
                    element++;
                    console.log(`Congrats! You have found matching elements - ${element}!`);
                    break;
                } else {
                    console.log("Try again!");
                    break;
                }
            } else if (command < 0 || command > arr.length || index2 < 0 || index2 > arr.length || command == index2){
                let index = Math.trunc(arr.length / 2);
                element++;
                let symbol = "-" + element + "a";
                arr.splice(index, element, symbol);
                console.log("Invalid input! Adding additional elements to the board");
                break;

            }   
        
       
        
        }
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);
    