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

function search(value) {
    value = value.toLowerCase(); // normalize input
    let result = null;
 
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
 
        if (obj.firstName.toLowerCase() === value) {
            result = obj.firstName;
            break;
        } else if (obj.lastName.toLowerCase() === value) {
            result = obj.lastName;
            break;
        } else if (obj.email.toLowerCase() === value) {
            result = obj.email;
            break;
        } else if (obj.phoneNumber.toString() === value) {
            result = obj.phoneNumber;
            break;
        }
    }
 
    console.log(result);
}
search("hyd")