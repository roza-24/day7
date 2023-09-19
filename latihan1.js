
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Contoh tahun kabisat
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(1988)); 

// Contoh tahun bukan tahun kabisat
console.log(isLeapYear(2021)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2100)); 
