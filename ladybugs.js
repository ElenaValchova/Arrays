function ladybugs(input) {
    let range = input[0];
    let positonsIdxs = input[1].split(" ").map(Number);
    let field = [];

    for (let j = 0; j < range; j++) {
        if (positonsIdxs.includes(j)) {
            field[j] = 1;
        } else {
            field[j] = 0;
        }
    }


    for (let i = 2; i < input.length; i++) {
        let curCommands = input[i];
        let curCommand = curCommands.split(" ");

        let positon = Number(curCommand[0]);
        let direction = curCommand[1];
        let numPositions = Number(curCommand[2]);

        if (!field[positon]) {
            continue;
        }

        field[positon] = 0;

        if (direction === "right") {
            let newIndex = positon + numPositions;

            if (newIndex < field.length) {
                while(field[newIndex] == 1) {
                    newIndex += numPositions;
                }
            }

            if (newIndex < field.length) {
                field[newIndex] = 1;
            }


        } else {
            let newIndex = positon - numPositions;

            if (newIndex >= 0) {
                while(field[newIndex] == 1){
                    newIndex -= numPositions;
                }
            }

            if (newIndex > 0) {
                field[newIndex] = 1
            }
        }

    }
    console.log(field.join(" "));
}

// ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
// ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);