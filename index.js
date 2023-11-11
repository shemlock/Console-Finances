/* The dataset for this project
The finances variable is a nested array
The main array is finances
Then within the main finances array is multiple sub arrays
Each sub array has two elements -
A string containing a date at index 0
And a number containing that date's revenue at index 1 */

var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

/* Adding a heading for the console.
   Declaring the heading variable
   Assigning it with three concatenated strings containing the title, a line break and dashes */

var heading = 'Financial Analysis' + '\n' + '-------------------';

//Printing the heading to the console

console.log(heading)

//TASK 01 - Total Number of Months in the dataset

/* Declaring the totalMonths variable
   Assigning it with the length of the finances array */

var totalMonths = finances.length;

//Printing a string to the console that's concatenated with the totalMonths variable

console.log('Total Months: ' + totalMonths)

//TASK 02 - Total Amount of Profit/Losses over the entire period

/* Declaring the totalAmount variable
   Assigning it the value of 0 */

var totalAmount = 0;

/* Creating the for loop for calculating the total amount of revenue
   Initialization:
      Declaring the i variable and setting the value to 0
   Condition:
      totalMonths is the length of the finances array,
      Set the condition so that the loop will iterate over the finances array,
      as long as the i is less than totalMonths
   Increment Expression: 
      After each loop the i variable will increase by 1,
      ie it will go onto the next sub array in the finances array */
      
/* Defining the code block that'll be run for each iteration of the loop
   The value of the totalAmount variable will be added to and updated:
   For each iteration, the finances array is accessed at the position of where the i variable is at,
   then the second element, the revenue number is accessed using [1]
   The revenue value will be added to the totalAmounts variable
   Then on the next iteration the next value will be added to totalAmount and the value is updated. 
*/

for (var i = 0; i < totalMonths; i++) {
  totalAmount += finances[i][1];
}

//Printing a string to the console that's concatenated with the totalAmount variable
console.log('Total: $' + totalAmount)

//TASK 03 - The average of the changes in Profit/Losses over the entire period

/* Setting the value of previousAmount variable
   to be the revenue of the first month by
   accessing the first sub array in the main finances array
   then accessing the second element at index 1 */

var previousAmount = finances[0][1];

//Initializing the other variables
var change = 0;
var totalChanges = 0;
var averageChanges = 0;

/* Creating the for loop for calculating the changes in revenue month by month
   Initialization: 
      Declaring the i variable and setting the value to 1
      So that it'll start with the second month, 
      as the first month doesn't have a previous month to compare to so there's no change
   Condition: 
      totalMonths is the length of the finances array,
      Set the condition so that the loop will iterate over the finances array,
      as long as the i is less than totalMonths
   Increment Expression: 
      After each loop the i variable will increase by 1,
      ie it will go onto the next sub array in the finances array */

/* Defining the code block that'll be run for each iteration of the loop
      Updating the value of the change variable to be
      the revenue of the current month - finances[i][1]
      minus the revenue of the previous month (the previousAmount variable is 
      set to finances[0][1] )

      Then adding that change to the totalChanges variable
      Then on the next iteration the next change will be added to 
      totalChanges and the value is updated

      Then setting up the comparison for the next iteration
      by updating the previousAmount variable to be the
      revenue of where i is at (ie the current month's revenue) */

for (var i=1; i < totalMonths; i++) {
   change = finances[i][1] - previousAmount;
   totalChanges += change;
   previousAmount = finances[i][1]
}

/* Then calculating the average change by 
   dividing the totalChanges by the totalMonths minus 1 
   Taking the 1 away because no change could be calculated for the first month
   Then assinging the result the the averageChanges variable */

averageChanges = totalChanges / (totalMonths - 1);

/* Printing a string to the console that's concatenated with the averagesChanges variable
   Then using the toFixed method on the averageChanges variable
   And putting 2 in the brackets to format it to 2 decimal places */

console.log('Average Change: ' + averageChanges.toFixed(2));

//TASK 04 - The greatest increase in Profit/Losses (date and amount) over the entire period
//TASK 05 - The greatest decrease in Profit/Losses (date and amount) over the entire period

/* Assigning the biggestIncrease variable and the biggestDecrease variable with 
   an array with an empty string as the first element that will store the date
   and a value of 0 as the second element that will store the increase/decrease number */

var biggestIncrease = ['',0];
var biggestDecrease = ['',0];

/*Creating the for loop for calculating biggest increase in changes
Initialization: 
Declaring the i variable and setting the value to 1
So that it'll start with the second month, 
as the first month doesn't have a previous month to compare to so there's no change
Condition: 
totalMonths is the length of the finances array,
Set the condition so that the loop will iterate over the finances array,
as long as the i is less than totalMonths
Increment Expression: 
After each loop the i variable will increase by 1,
ie it will go onto the next sub array in the finances array */

/* Defining the code block that'll be run for each iteration of the loop 
      Updating the value of the change variable to be
      the revenue of the current month - finances[i][1]
      minus the revenue of the previous month 
      (the previousAmount variable is set to finances[0][1] )

   Creating the if statement to find the biggestIncrease
      Setting the condition to be if change is greater than
      the the current value in the second element of the biggestIncrease array
      If it is then:
      The biggestIncrease array will be updated to include 
      the date from the finances array and the change value. 
   
   Creating the if statement to find the biggestDecrease
      Setting the condition to be if change is less than
      the the current value in the second element of the biggestDecrease array
      If it is then:
      The biggestDecrease array will be updated to include 
      the date from the finances array and the change value. 

   Then setting up the comparison for the next iteration
   by updating the previousAmount variable to be the
   revenue of where i is at (ie the current month's revenue) */

for (var i=1; i < totalMonths; i++) {
   change = finances[i][1] - previousAmount;
   if (change > biggestIncrease[1]) {
      biggestIncrease = [finances[i][0], change];
   } if (change < biggestDecrease[1]) {
      biggestDecrease = [finances[i][0], change]
   }
   previousAmount = finances[i][1];
}

/* Printing strings to the console that are concatenated with each element in the biggestIncrease array
   The elements are seperated to add brackets and a dollar sign to the number element */

console.log('Greatest Increase in Profits/Losses: ' + biggestIncrease[0] + ' ($' + biggestIncrease[1] + ')');

/* Printing strings to the console that are concatenated with each element in the biggestDecrease array
   The elements are seperated to add brackets and a dollar sign to the number element */

console.log('Greatest Decrease in Profits/Losses: ' + biggestDecrease[0] + ' ($' + biggestDecrease[1] + ')');