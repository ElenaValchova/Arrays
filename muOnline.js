function muOnlain(input) {
    let roomsInfo = input.split("|");

    let initialHealth = 100;
    let coins = 0;
    let bestRoom = 1;

    for (let i = 0; i < roomsInfo.length; i++) {
        let tokens = roomsInfo[i].split(" ");
        let command = tokens[0];
        let num = Number(tokens[1]);
        
        if (command === "potion") {
            initialHealth += num;
            let numHP = 0
            
            if (initialHealth > 100) {
                initialHealth -= num
                numHP = Math.abs(initialHealth - 100);
                initialHealth = 100;

            } else {
                numHP = num;
            }
            console.log(`You healed for ${numHP} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (command == "chest") {
            coins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            initialHealth -= num;
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
        bestRoom++
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${initialHealth}`);
}

// muOnlain("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnlain("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");