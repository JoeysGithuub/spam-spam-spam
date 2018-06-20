const emailList = [];

customers.customers.forEach(cust => {
    const emailName = cust.contacts.email;
    const emailUp = emailName.map(function (emails) {
        emailList.push(emails)
        return emailList
    })
});

console.log(emailList)