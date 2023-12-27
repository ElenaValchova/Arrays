function train (input) {
    let wagons = (input[0].split(" ").map(Number));
    let maxCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let commands = input[i];
        let tokens = commands.split(" ");

        if (tokens[0] == "Add") {
            let numPassangers = Number(tokens[1]);
            wagons.push(numPassangers);
        } else {
            let numPassangers = Number(tokens[0]);

            for (let i = 0; i < wagons.length; i++) {

                if (wagons[i] + numPassangers <= maxCapacity){
                    wagons[i] += numPassangers
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6']);