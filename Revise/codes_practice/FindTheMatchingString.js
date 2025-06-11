let array = [
    {
        firstName: "teja",
        lastName: "ram",
        email: "xyz@gmail.com",
        phoneNumber: 987567587
    },
    {
        firstName: "sri",
        lastName: "divya",
        email: "xzy@gmail.com",
        phoneNumber: 9875675878776
    },
    {
        firstName: "Rahul",
        lastName: "HYd",
        email: "xzyh@gmail.com",
        phoneNumber: 9875675878736
    }
];

function searchArray(query) {
    query = query.toString().toLowerCase(); // ensure number & text can be compared
    return array.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(query)
        )
    );
}

// Example usage
console.log(searchArray("sri")); // returns object with firstName "sri"
// console.log(searchArray("9875")); // returns all that match number pattern
// console.log(searchArray("xyz@gmail.com")); // exact email match