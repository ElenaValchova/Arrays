function gladiatorsInventory(input) {
    let inventory = input.shift().split(" ");

    for (let data of input) {
        let tokens = data.split(" ");
        let command = tokens[0];

        if (command == "Buy") {
            let equip = tokens[1];
            if (!inventory.includes(equip)) {
                inventory.push(equip);
            }
        } else if (command == "Trash") {
            let equip = tokens[1];
            let index = inventory.indexOf(equip);
            if (inventory.includes(equip)) {
                inventory.splice(index, 1);
            }
        } else if (command == "Repair") {
            let equip = tokens[1];
            if (inventory.includes(equip)){
                let index = inventory.indexOf(equip);
                let itemRepaier = inventory.splice(index, 1);
                inventory.push(...itemRepaier);
            } 
        } else if (command == "Upgrade") {
            let items = tokens[1].split("-");
            let equip = items[0];
            let newEquip = items[1];
            if (inventory.includes(equip)) {
                let index = inventory.indexOf(equip);
                let result = (`${equip}:${newEquip}`)
                inventory.splice(index + 1, 0, result);
            }
        }
    }
    console.log(inventory.join(" "));
}
