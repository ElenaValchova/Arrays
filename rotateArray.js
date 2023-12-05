function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();

    for (let i = 1; i <= rotations; i++) {
        let curToken = arr.pop();
        arr.unshift(curToken);
        
        //arr.push(curToken);
    }
    console.log(arr.join(" "));
}

// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rotateArray(['1', '2', '3', '4', '2']);