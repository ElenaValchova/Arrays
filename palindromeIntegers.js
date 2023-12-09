function palindrome(arr) {

    for(let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numAsString = String(num);
        let reversedNumSrting = "";

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let curChar = numAsString[i];
            reversedNumSrting += curChar;
        }

        if (numAsString === reversedNumSrting) {
            return true;
        } else {
            return false;
        }
    }
}

palindrome([32,2,232,1010]);