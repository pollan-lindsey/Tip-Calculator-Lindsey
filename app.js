//function for submit button? includes if/else statement
//if submit button is pushed, output it into tip box/form
//need getElementById for buttons
//math requires some methods not taught in class
//how do I return all this to html?

//for math:
//refer to bookmark: round to 2 decimals


///////////

//set up some empty arrays

//get elements from HTML
let billAmount = document.getElementById('bill-amount');
let tipAmount = document.getElementById('tip-amount-select');
let custAmount = document.getElementById('customer-amount');
//grabs children of tip amount from html and puts them in an array
let children = tipAmount.children;
//console.log(children[0]);
//let submitButton = document.getElementById()

//calculating tip by hand:
//billAmount / custAmount === money each customer pays
//multiply that amount by tip percentage

//function/let totalBill used to divide billAmount by custAmount

//calculating tip by JS
//Find out how to attach different percentages to the various tip amounts (do values count as children? can i refer to children in JS? (yes to both)
//tip amount children: children[0] = 5%; children[1] = 10%; children[2] = 15%; children[3] = 25%; children[4] = 50%
//if firstChild is used, multiply by 0.05?
//use else if in a for loop once the above is figured out
//event listeners to children?

//using this to figure out tip amount:
//for (i=0; i < ?; i++) {
// if ? {
    //totalBill * 0.05 (use math function that rounds to two decimal points)
//}else if{
    //?
    //totalBill * 0.1 (use math function to round to two decimal places)
    //do this for every tip amount and put 50% tip under 'else'

//}
//}
//put the result of each of the above in the empty container back in html that I'll make later
