function addOrRemove(arr){
    let newArray = [];
    let initialNumber = 0
    
    for (let i = 0; i < arr.length; i++) {
        let curCommand = arr[i];
        
        if (curCommand == "add"){
            initialNumber = 1 + i;
            newArray.push(initialNumber)
        } else if (curCommand == "remove") {
            newArray.pop();
        }

        
    }
    if (newArray.length > 0) {
        console.log(newArray.join(" "));
    } else {
        console.log("Empty");
    }
}

// addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
// addOrRemove(['remove', 'remove', 'remove']);