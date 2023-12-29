// - "{name} is going!"

// - "{name} is not going!"

// If you receive the first type of input, you have to add the person if he/she is not in the list 
//(If he/she is in the list print: "{name} is already in the list!").

// If you receive the second type of input, you have to remove the person if he/she is in the list 
//(if not print: "{name} is not in the list!").


function hauseParty(input) {
    let guests = [];

    for (let commands of input) {
        let tokens = commands.split(" ");
        let name = tokens[0];
        if (tokens.includes("not")) {
            
            if (guests.includes(name)){
                guests = guests.filter(guests => guests !== name);
            } else {
                console.log(`${name} is not in the list!`);
        } 
    } else {
        if (guests.includes(name)){
            console.log(`${name} is already in the list!`);
        } else {
            guests.push(name);
        }
    }
    }
    console.log(guests.join("\n"));
}
// hauseParty(['Allie is going!',

// 'George is going!',

// 'John is not going!',

// 'George is not going!'])

hauseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])