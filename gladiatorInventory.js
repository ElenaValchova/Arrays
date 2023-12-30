// If you receive the Buy command, you should add the equipment at the last position in the inventory, 
//but only if it isn't bought already.

// If you receive the Trash command, delete the equipment if it exists.

// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.

// If you receive the Upgrade command, you should check if the equipment exists and insert 
//after it the upgrade in the following format: "{equipment}:{upgrade}".



function gladiatorInventory(input) {
    let inventory = input[0].split(" ");

    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let curCommand = tokens[0];

        if (curCommand == "Buy") {
            let curEquip = tokens[1];
            if (!inventory.includes(curEquip)) {
                inventory.push(curEquip);
            }
        } else if (curCommand == "Trash") {
            let curEquip = tokens [1];
            let index = inventory.indexOf(curEquip)
            if (inventory.includes(curEquip)) {
                inventory.splice(index, 1)
            }
        } else if (curCommand == "Repair") {
            let curEquipment = tokens[1];

             if (inventory.includes(curEquipment)) {
                let index = inventory.indexOf(curEquipment);
                inventory.splice(index, 1);
                inventory.push(curEquipment);
             }
        } else if (curCommand == "Upgrade") {
            let curEquipmnet = tokens[1].split('-');

            if (inventory.includes(curEquipmnet[0])) {
                let index = inventory.indexOf(curEquipmnet[0])
                let newItems = curEquipmnet[0] + ":" + curEquipmnet[1];
                inventory.splice(index + 1, 0, newItems);
            }
        }
    }
    console.log(inventory.join(" "));
}

// gladiatorInventory(['SWORD Shield Spear',

// 'Buy Bag',

// 'Trash Shield',

// 'Repair Spear',

// 'Upgrade SWORD-Steel'])

gladiatorInventory(['SWORD Shield Spear',

'Trash Bow',

'Repair Shield',

'Upgrade Helmet-V'])