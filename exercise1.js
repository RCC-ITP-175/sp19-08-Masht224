console.log("exercise1.js start");
// INSTRUCTIONS
// Write a function named getAllCustomers that accepts the customerObj
// as an argument and iterates through the object to return all customers in this format.
// First Last, customer #customerID has a balance of $1234.56

var customersObj = {
    23567: {
        'name': {
            'first': 'Ichigo',
            'last': 'Kurosaki'
        }, 
        'customerID': 23567,
        'balance': 153677345
    },
    1234: {
        'name': {
            'first': 'Gin',
            'last': 'Ichimaru'
        }, 
        'customerID': 1234,
        'balance': 1235412356
    },
    1531: {
        'name': {
            'first': 'Shunsui',
            'last': 'Kyoraku'
        }, 
        'customerID': 1531,
        'balance': 65432467
    },
    543: {
        'name': {
            'first': 'Kisuke',
            'last': 'Urahara'
        }, 
        'customerID': 543,
        'balance': 63463723562
    },
    667: {
        'name': {
            'first': 'Ulquiorra' 
        }, 
        'customerID': 667,
        'balance': 4562647745
    }
};



function getAllCustomer(name,customerID, balance) [
  for (var i = 0; i < customersObj.length; i++) [
    if (customerObj[i]. firstname === name) {
      return customerObj[i][first, last,customerID, balance] || "no such entry"


function formatMoney(amount){
  var balance = amount.toFixed(2);
  return "$" + balance;


///////////////////////
// INSTRUCTOR FEEDBACK
///////////////////////
// -2pts You have some typos at the end of lines 51 and 52 where you're using
// [ instead of { and you are missing the closing } as well.
        
// Refer to https://www.youtube.com/watch?v=a3KHBqH7njs and try using a for in loop
// instead of the regular for loop you have on line 52. You may be able to reduce the 
// amount of code you're writing in lines 52-54 that way.

// Creating the separate formatMoney function isn't required, but is a smart way to think
// as you could use that function independantly of getAllCustomers if you had other
// need for it. Don't forget to call it though.


















// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(getAllCustomers(customersObj)); 
//should return 
//Ichigo Kurosaki, customer #23567 has a balance of $1536773.45
//Gin Ichimaru, customer #1234 has a balance of $12354123.56
//Shunsui Kyoraku, customer #1531 has a balance of $654324.67
//Kisuke Urahara, customer #543 has a balance of $634637235.62
//Ulquiorra, customer #667 has a balance of $45626477.45
