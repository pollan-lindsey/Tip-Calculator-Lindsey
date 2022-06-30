//function for submit button? includes if/else statement
//if submit button is pushed, output it into tip box/form
//need getElementById for buttons
//math requires some methods not taught in class
//how do I return all this to html? look into .innerhtml; document.write;

//for math:
//refer to bookmark: round to 2 decimals
//put it all in a function
//add event listener to function
//turn everything into a number
//turn tip value to a percent
//turn billAmount to two decimal value

//add event listener to reset


///////////

//set up some empty arrays

//get elements from HTML
let billAmount = document.getElementById('bill-amount');
let tipAmount = document.getElementById('tip-amount-select'); //access tip amount: tipAmount.value
let custAmount = document.getElementById('customer-amount'); 
let submit = document.getElementById('submit');
let tipPerPerson = document.getElementById('tip-per-person'); 
let totalPerPerson = document.getElementById('total-per-person');
let submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');


//turn bill, tip (percentage), and customer into a number

let billInt = parseInt (billAmount, 10);
//console.log(billInt);
//turn tip into a number:
let tipInt = parseInt (tipAmount.value, 10);
//turn tip into a percentage
let tipPercent = tipInt / 100
//turn customer into a number
let custInt = parseInt (custAmount, 10);



//calculating tip by JS
//Find out how to attach different percentages to the various tip amounts (do values count as children? can i refer to children in JS? (yes to both)
//tip amount children: children[0] = 5%; children[1] = 10%; children[2] = 15%; children[3] = 25%; children[4] = 50%
//if firstChild is used, multiply by 0.05?
//use else if in a for loop once the above is figured out
//event listeners to submit
function totalBill(bill, tip, customer){
//write math equation using bill, tip, and customer
//bill divided by customer to get bill per customer before tip, then
//calculating tip:
//divide the bill by the number of customers: 
let tipMath = bill / customer;
//multiply that by the tip as a percentage:

//round it to two decimal places:

}
//add event listener to total bill
//run the numbers through math equation
//when submit button is clicked, put all information in output boxes

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
