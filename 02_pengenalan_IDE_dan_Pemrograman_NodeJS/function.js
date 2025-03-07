// named function
function perkalian(a, b) {
// sourcery skip: inline-immediately-returned-variable
    let result = a*b
    return result
}

// expression function
// arrow function
// anonymous function
const pertambahan = (a, b) => {
// sourcery skip: inline-immediately-returned-variable
    let result = a+b
    return result
}

// named expression function
const pembagian = function bagi(a,b) {
// sourcery skip: inline-immediately-returned-variable
    let result = a/b
    return result
}

console.log(perkalian(5,2))
console.log(pertambahan(6, 2))
console.log(pembagian(8,2))