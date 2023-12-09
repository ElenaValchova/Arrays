function passwordValidator(password) {

    let isValidLength = checkLength(password);
    let checkOnlyLetterAndDigits = checkLetterAndDigits(password);
    let is2Digits = checkFor2Digits(password);

    if (isValidLength && checkOnlyLetterAndDigits && is2Digits) {
        console.log("Password is valid");
    }

    function checkLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkLetterAndDigits(password) {
        for (let curChar of password) {
            let code = curChar.charCodeAt(0)
            if (
                !((code >= 65 && code <= 90) || 
            (code >= 48 && code <= 57) || 
            (code >= 97 && code <= 122))) {
                console.log("Password must consist only of letters and digits");
                return false;
            } 
        }
        return true;
    }

    function checkFor2Digits(password) {
        let countDigits = 0;
        
        for (let curChar of password) {
            let code = curChar.charCodeAt();
        
            if (code >= 48 && code <= 57) {
                countDigits++;
            }
        }
        if (countDigits >= 2) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
}
passwordValidator('Pa$s$s');