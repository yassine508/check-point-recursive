function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

isLeapYear(2024); 
isLeapYear(2023);  
function getTicketPrice(age) {
    if (age <= 12) {
        return "$10 (Child)";
    } else if (age >= 13 && age <= 17) {
        return "$15 (Teenager)";
    } else {
        return "$20 (Adult)";
    }
}
console.log(getTicketPrice(10));  
console.log(getTicketPrice(16));  
console.log(getTicketPrice(25));  
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));  
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else {
        if (str[0] === str[str.length - 1]) {
            return isPalindrome(str.slice(1, str.length - 1));  // Check substring
        } else {
            return false;
        }
    }
}

console.log(isPalindrome("azza"));  



