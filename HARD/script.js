function Private() {
    let PII = {
        name: "ly",
        SSN: "123-45-6789"
    };
    return {
        getName: function () {
            return PII.name
        },
        getSSN: function () {
            return PII.SSN
        }
    }
}

let patient2 = Private()

console.log(patient2.name);
console.log(patient2.SSN);
console.log(patient2.getName());
console.log(patient2.getSSN()); 