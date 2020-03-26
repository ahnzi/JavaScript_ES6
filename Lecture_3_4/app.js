// String.prototype.includes()
const isEmail = email => email.includes("@");

console.log(isEmail("nico@nomadcoders.co"));

// String.prototype.repeat()
const CC_NUMBER = "6060";

const displayName = `${"*".repeat(12)}${CC_NUMBER}`;

console.log(displayName);

// String.prototype.startsWith
const name = "Mr. Ahnzi";

console.log(name.startWith("Mr"));