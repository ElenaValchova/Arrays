function manOWar(input) {
    let pirateShipStatus = input[0].split(">").map(Number);
    let warShipStatus = input[1].split(">").map(Number);
    let maxHealth = Number(input[2]);
    

    for (let i = 3; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];

        if (command == "Retire") {
            break;
        }

        if (command == "Fire") {
            let index = Number(tokens[1]);
            let demage = Number(tokens[2]);
            let length = pirateShipStatus.length

            if (index >= 0 && index <= length - 1) {

                for (let i = index; i <= index; i++) {
                    let curIndex = Number(warShipStatus[i]);
                    curIndex -= demage;
                    warShipStatus.splice(index, 1, curIndex);
                    if (curIndex <= 0) {
                        console.log("You won! The enemy ship has sunken");
                        return;
                    }
                }
            } else {
                continue;
            }

        } else if (command == "Defend") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let demage = Number(tokens[3]);
            let length = pirateShipStatus.length;

            if ((startIndex >= 0 && startIndex <= length -1 ) && (endIndex >= 0 && endIndex <= length - 1)) {

                for (let start = startIndex; start <= endIndex; start++) {
                    let curIndex = Number(pirateShipStatus[start]);
                    curIndex -= demage;
                    pirateShipStatus.splice(start, 1, curIndex);

                    if (curIndex <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            } else {
                continue;
            }
        } else if (command == "Repair") {
            let index = Number(tokens[1]);
            let number = Number(tokens[2]);
            let length = pirateShipStatus.length;

            if (index >= 0 && index <= length -1) {

                for (let i = index; i <= index; i++) {
                    let curIndex = pirateShipStatus[i];
                    curIndex += number;
                    pirateShipStatus.splice(index, 1, curIndex);
                    if (curIndex > maxHealth) {
                        curIndex = maxHealth;
                    }
                }
            }
        } else if (command == "Status") {
            let count = 0;
            for (let i = 0; i < pirateShipStatus.length; i++) {
                let curIndex = pirateShipStatus[i];

                let percentage = maxHealth * 0.20;
                if (curIndex < percentage) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }

    let pirateShipSum = 0;
    for (let i = 0; i < pirateShipStatus.length; i++) {
        let curNum = pirateShipStatus[i];
        pirateShipSum += curNum
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);

    let warShipSum = 0;
    for (let i = 0; i < warShipStatus.length; i++) {
        let cutNum = warShipStatus[i];
        warShipSum += cutNum;
    }
    console.log(`Warship status: ${warShipSum}`);
}


// manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100",
//     "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
manOWar(["2>3>4>5>2",

"6>7>8>9>10>11",

"20",

"Status",

"Fire 2 3",

"Defend 0 4 11",

"Repair 3 18",

"Retire"]);