function dugeonesDark(arr) {
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split("|");
  
    let health = 100;
    let coins = 0;
    let bestRoom = 1;

    for (let room of rooms) {
        let curRoom = room.split(" ");
        let command = curRoom[0];
        let num = Number(curRoom[1]);
        
        if (command == "potion") {
            let HP = Math.abs(health - 100);
            health += num;
            if (health > 100) {
                health = 100;
                console.log(`You healed for ${HP} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command == "chest"){
            console.log(`You found ${num} coins.`);
            coins += num;
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }

        bestRoom++;
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }

}

dugeonesDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dugeonesDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);