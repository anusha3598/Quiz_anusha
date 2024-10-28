//change 10 to the total number of questions
var total=10;
var question=new Array();
for (i=1;i<=total+1;i++){
    temp="choice"+i+"=new Array()";
    eval(temp);
}
var solution=new Array();

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array();
compliments[0]="Excellent!";
compliments[1]="Wow, you're really rocking!";
compliments[2]="Absolutely correct!";
compliments[3]=" You're a genius!";
compliments[4]="Perfecto!!";
compliments[5]="Great!";
compliments[6]="Awesome!";

question[1]="What should you never do with a cup of coffee?";
choice1[1]="Spill it";
choice1[2]="Let it get cold";
choice1[3]="Drink it after 5 PM";
choice1[4]="All of the above";

question[2]="Which country is credited with the discovery of coffee?";
choice2[1]="Jamaica";
choice2[2]="Italy";
choice2[3]="Canada";
choice2[4]="Arabia";

question[3]="What should you add to coffee if it is too bitter for your taste?";
choice3[1]="Salt";
choice3[2]="More coffee";
choice3[3]="Lemon";
choice3[4]="Ice cubes";

question[4]="What phrase is often used to describe the magic that happens when you take your first sip of coffee?";
choice4[1]="Sip, sip, hooray!";
choice4[2]="Instant happiness!";
choice4[3]="Coffee: the morning hug!";
choice4[4]="All of the above";

question[5]="Which country holds the title for the largest coffee producer in the world?";
choice5[1]="Brazil";
choice5[2]="Vietnam";
choice5[3]="Colombia";
choice5[4]="Ethiopia";

question[6]="How much coffee does the average American drink in a year?";
choice6[1]="Enough to fill a bathtub";
choice6[2]="5 gallons";
choice6[3]="10 gallons";
choice6[4]="15 gallons";

question[7]="Which coffee drink consists of equal parts espresso, steamed milk, and foam?";
choice7[1]="Latte";
choice7[2]="Cappuccino";
choice7[3]="Macchiato";
choice7[4]="Americano";

question[8]="Which city did the iconic journey of Starbucks begin?";
choice8[1]="New York City";
choice8[2]="Rio de Janeiro";
choice8[3]="Seattle";
choice8[4]="Miami";

question[9]="If coffee beans aren't actually beans, what are they?";
choice9[1]="Nuts";
choice9[2]="Seeds";
choice9[3]="Legumes";
choice9[4]="Fruit";

question[10]="What is this coffee-based dessert?";
choice10[1]="Cortado";
choice10[2]="Affogato";
choice10[3]="Zabaione";
choice10[4]="Macchiato";

solution[1]="d";  // Answer for question 1
solution[2]="d";  // Answer for question 2
solution[3]="a";  // Answer for question 3
solution[4]="d";  // Answer for question 4
solution[5]="a";  // Answer for question 5
solution[6]="a";  // Answer for question 6
solution[7]="b";  // Answer for question 7
solution[8]="c";  // Answer for question 8
solution[9]="b";  // Answer for question 9
solution[10]="b"; // Answer for question 10
