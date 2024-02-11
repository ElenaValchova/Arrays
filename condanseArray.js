function condanseArray(input) {
    let condanced = [];
   let desiredlength = 1

   if (input.length == 1) {
    console.log(`${input}`);
    return;
   }

    while (input.length != desiredlength){

        condanced = [];

        for (let i = 0; i < input.length - 1; i++) {
            
            condanced[i] = input[i] + input[i + 1];
        }
        input = condanced
    }
    console.log(condanced.join(" "));
}

condanceArray([5,0,4,1,2]);
