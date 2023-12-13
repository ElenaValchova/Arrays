function loadinfBar(number) {
   let percrntage = "%".repeat(number / 10);
   let dot = ".".repeat((100 - number)/ 10);

   if (number === 100) {
        console.log("100% Complete!");
        console.log(`[${percrntage}]`);
   } else {
        console.log(`${number}% [${percrntage}${dot}]`);
        console.log("Still loading...");
   }

}

loadinfBar(100);