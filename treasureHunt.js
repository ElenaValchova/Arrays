function tresureHunt(input) {
    let loot = input[0].split("|");


    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];


        if (command == "Yohoho!") {
            break;
        } else if (command == "Loot") {
            for (let i = 1; i < tokens.length; i++) {
                let curLoot = tokens[i];
                if (!loot.includes(curLoot)) {
                    loot.unshift(curLoot);
                }
            }
        } else if (command == "Drop") {
            let index = Number(tokens[1]);

            if (index >= 0 && index < loot.length) {
                let curLoot = loot.splice(index, 1).shift();
                loot.push(curLoot);
            } else {
                continue;
            }
        } else if (command == "Steal") {
            let count = Number(tokens[1]);
            let curLoot = loot.splice(-count);
            console.log(curLoot.join(", "));
        }
    }
    if (loot.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for (let item of loot) {
            let curItem = item.length;
            sum += curItem;
        }

        let avg = sum / loot.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }

}

// tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",

//     "Loot Wood Gold Coins",

//     "Loot Silver Pistol",

//     "Drop 3",

//     "Steal 3",

//     "Yohoho!"]);

tresureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])