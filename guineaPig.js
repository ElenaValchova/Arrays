function guineaPig(input) {
    let kilogramFood = Number(input[0]);
    let hayKilograms = Number(input[1]);
    let coverKilograms = Number(input[2]);
    let weight = Number(input[3]);

    let foodGrams = kilogramFood * 1000;
    let heyGrams = hayKilograms * 1000;
    let coverGrams = coverKilograms * 1000;
    let weightGrams = weight * 1000;


    for (let day = 1; day <= 30; day++) {
        foodGrams -= 300;
        if (day % 2 == 0) {
            let percentage = foodGrams * 0.05;
            heyGrams -= percentage;
        }

        if (day % 3 == 0) {
            let pigWeight = weightGrams * 1/3;
            coverGrams -= pigWeight;
        }
        if (foodGrams <= 0 || heyGrams <= 0 || coverGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
        
    }
    if (foodGrams != 0 || heyGrams != 0 || coverGrams != 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams / 1000).toFixed(2)}, Hay: ${(heyGrams / 1000).toFixed(2)}, Cover: ${(coverGrams / 1000).toFixed(2)}.`);
    }
}

// guineaPig(["10",

// "5",

// "5.2",

// "1"])

// guineaPig(["1",

// "1.5",

// "3",

// "1.5"

// ])

guineaPig(["9",

"5",

"5.2",

"1"])