function build(input) {
    let parsedArray = input.map(Number);
    let concreateUsed = [];
    let totalConcreate = 0;

    let crews = parsedArray.length;

    while (crews != 0) {
        let allConcreate = 0;

        for (let i = 0; i < parsedArray.length; i++) { 
            if (parsedArray[i] !== 30) {
                parsedArray[i]++;
                allConcreate += 195;
                
                if (parsedArray[i] == 30) {
                    crews--;
                }
            } 
            
        }
        concreateUsed.push(allConcreate);
        totalConcreate += allConcreate;
    }
    console.log(concreateUsed.join(", "));
    let cost = totalConcreate * 1900;
    console.log(`${cost} pesos`);
}

// build([21, 25, 28]);

// build([17]);

build([17, 22, 17, 19,

    17]);