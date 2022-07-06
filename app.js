//there's an event called submit
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


//get elements from HTML
let billAmount = document.getElementById('bill-amount');
let tipAmount = document.getElementById('tip-amount-select'); //access tip amount: tipAmount.value
let custAmount = document.getElementById('customer-amount'); 
let tipPerPerson = document.getElementById('tip-per-person'); 
let totalPerPerson = document.getElementById('total-per-person');
let submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');

//.value brings anything the user puts in
//turn bill, tip (percentage), and customer into a number

let billInt = parseInt (billAmount.value, 10);
//turn tip into a number:
let tipInt = parseInt (tipAmount.value, 10);
//turn tip into a percentage
let tipPercent = tipInt / 100
//turn customer into a number
let custInt = parseInt (custAmount.value, 10);
//put above in below function

//get customer vlaues from input
function getInputValues(){

}
//calculate the tip
function tipPerPerson(bill, customer){
//calculating tip:
//divide the bill by the number of customers: 
let billMath = bill / customer;
//multiply that by the tip as a percentage:
let tipMath = billMath * tipPercent;
//round it to two decimal places (Number.EPSILON makes sure the number is rounded correctly):
let tip = Math.round((tipMath + Number.EPSILON) * 100 )/ 100;
}
//put arguments where placeholders are in function totalBill
//use integer values bc they are integers and therefore can be used in a math problem
tipPerPerson(billInt, custInt);

//calculate full bill
function totalBill(tip, bill){
    //add tip to subtotal bill
let addedTotal = tip + bill
}
totalBill( )
//add event listener to submit
//run the numbers through math equation
//when submit button is clicked, put all information in output boxes
submitButton.addEventListener('click', function(){totalBill(tipInt, billInt)}); //write 'function'(){call function w/ parameters}

