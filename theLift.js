function theLift(input) {
    let waithingPeople = Number(input.shift());
    let liftStatus = input.shift().split(" ").map(Number);

    for (let i = 0; i < liftStatus.length; i++) {
        let curWagon = liftStatus[i];

        let index = liftStatus.indexOf(curWagon);
        
        for (let i = 1; i <= 4; i++) {

            if (waithingPeople <= 0) {
                break;
            } else if (curWagon < 4) {
                curWagon++;
                waithingPeople--;
                liftStatus.splice(index, 1, curWagon);
            } 
        }

        if (waithingPeople <= 0) {
            break;
        }
    }
    

    let isFull = true;

    for (let i = 0; i < liftStatus.length; i++) {
        let curWagon = liftStatus[i];
        if (curWagon == 4) {
            isFull = true;
        } else {
            isFull = false;
        }
    }


    let checked = liftStatus.filter(num => num > 0);

    if (waithingPeople == 0 && liftStatus.includes(0)) {
        console.log("The lift has empty spots!");
        console.log(checked.join(" "));
    } else if (waithingPeople != 0 && !liftStatus.includes(0)) {
        console.log(`There isn't enough space! ${waithingPeople} people in a queue!`);
        console.log(liftStatus.join(" "));
    } else if (waithingPeople <= 0 && isFull) {
        console.log(liftStatus.join(" "));
    }
}

theLift([
    "15",
    "0 0 0 0 0"
   ]);

// theLift([
//     "20",
//     "0 2 0"
//    ]);
   