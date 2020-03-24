const emails = ["nco@no.com", "naver@google.com", "lynn@gmail.com", "nico@nomad.com", "nico@gmail.com"];

// const foundMail = email.find(item => item.includes("@gmail.com"));
// console.log(foundMail);

// const noGmail = emails.filter(email => !email.includes("@gmail.com"));
// console.log(noGmail);

// const name = "Jihoon Ahn";
// name.split(" ");

// const emails = ["nco@no.com", "naver@google.com", "lynn@gmail.com", "nico@nomad.com", "nico@gmail.com"];

// const cleaned = email.map((email, index => ({
// 	username: emai.split("@")[0],
// 	index
// }));

// console.log(cleaned);

const emails = ["nco@no.com", "naver@google.com", "lynn@gmail.com", "nico@nomad.com", "nico@gmail.com"];

const cleaned = email.map((email, index => ({
	username: emai.split("@")[0],
	points: index,
})));

console.table(cleaned);
