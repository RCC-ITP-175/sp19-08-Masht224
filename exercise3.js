console.log("exercise3.js start");
// INSTRUCTIONS
// Write a function named resetCustomers that accepts
// the customersObj as an argument and performs the
// following actions.
// 1) Divides each persons's balance by half. Round down any
//    whose new balance gives them a half penny.
// 2) Generates a new random integer between 1-1000 for each person's customerID.
// 3) Iterates through all people in the customersObj object and outputs each person's 
//    new information in this format
//    First Last #customerID now has a balance of $1234.56

var customersObj = {
    'lastModified': '04-21-19',
    'oganization': 'Gotei 13',
    'location': 'Seireitei',
    'people': [
        {
            'name': {
                'first': 'Ichigo',
                'last': 'Kurosaki'
            }, 
            'customerID': 23567,
            'balance': 153677345
        },
        {
            'name': {
                'first': 'Gin',
                'last': 'Ichimaru'
            }, 
            'customerID': 1234,
            'balance': 1235412356
        },
        {
            'name': {
                'first': 'Shunsui',
                'last': 'Kyoraku'
            }, 
            'customerID': 1531,
            'balance': 65432467
        },
        {
            'name': {
                'first': 'Kisuke',
                'last': 'Urahara'
            }, 
            'customerID': 543,
            'balance': 63463723562
        },
        {
            'name': {
                'first': 'Ulquiorra',
                'last': 'Cifer' 
            }, 
            'customerID': 667,
            'balance': 4562647745
        }
    ]
};

















no idea how to do this one...









// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(resetCustomers(customersObj)); 
//should return 
//Ulquiorra Cifer is now #100 with a balance of $22813238.72
//Gin Ichimaru is now #101 with a balance of $6177061.78
//Ichigo Kurosaki is now #102 with a balance of $768386.72
//Shunsui Kyoraku is now #103 with a balance of $327162.33
//Kisuke Urahara is now #104 with a balance of $317318617.81
