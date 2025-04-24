// 1. Parsing string menjadi tanggal
const dateInput = "Jan 1, 2009";
const parsedDate = new Date(dateInput);
console.log(parsedDate.toString());

// 2. Parsing string menjadi karakter (satu huruf)
const myString1 = "Alok";
const myChar = myString1.charAt(0); // Ambil karakter pertama
console.log(myChar);

// 3. Parsing string menjadi boolean
const myString2 = "True";
const myBool = myString2.toLowerCase() === "true";
console.log(myBool);

// 4. Parsing string menjadi enum (dalam hal ini DayOfWeek)
const myString3 = "Thursday";
const daysOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};
const myDay = daysOfWeek[myString3];
console.log(myDay);