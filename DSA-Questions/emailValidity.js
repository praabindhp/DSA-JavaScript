// isValidEmail("test@example.com"); 
// Output: true

// isValidEmail("invalid-email"); 
// Output: false

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidEmailWithoutRegex(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    }
    return false;
}

console.log(isValidEmail("test@example.com"));
console.log(isValidEmailWithoutRegex("@."));