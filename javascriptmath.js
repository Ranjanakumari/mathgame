/* if we click on start reset button 
if we r playing then the button is going to be in reset and reload the page we r not playing then the countdown bein reduce the time by ne sec
timeleft?
otherwiase gme over
change the button text to reset
we need to generate a new question and multiple ans
sequence if we click on answer box
if we r playin then we rging to check correct?
yes
increase score
show correct box for one sec 
we r going to generate new question and ans 
if the ans is wrong show try again*/
var playing = false;
var score  ;
var action ;
var timeremaining;
 var correctAnswer;
var wrongAnswer;
document.getElementById("startreset").onclick =
function () {
    if (playing == true ){
        location.reload();//reload page
        }else {
            playing =true;
            //set score to zero
    score = 0;
            document.getElementById("scoreboard").innerHTML = score;
            //show countdownbox 
    /*document.getElementById("timeremaining").style.display = "block"; */
            show("timeremaining");
             timeremaining =60;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining ;
            // hide game over box
            hide("gameover"); 
             //chenge button to reset
            document.getElementById("startreset").innerHTML = "Reset Game"; 
            //start countdown
            startCountdown();
              generateQA(); 
            stopCountdown();
            // generate a new question
            
    }
}
//clickin on answer box
for( i=1;i<5;i++){
document.getElementById("box"+i).onclick =function(){
    if( playing == true)
        {
            if(this.innerHTML == correctAnswer){
                //correct answer
                score++;
            document.getElementById("scoreboard").innerHTML =score;
                // show the correct box and hide the wrong box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                 },1000);
                  // generate the new question after back one completed
                generateQA();
               
               }else{
                   // wrong answer
                     hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
                   
                   
               }
        }
}
}
//for function 

// write the code for countdown
function startCountdown()
{
    action = setInterval(function(){
        timeremaining  -= 1 ; 
         document.getElementById("timeremainingvalue").innerHTML = timeremaining ;
        if(   timeremaining  == 0){// game over
            //to stop counter
            
           /* document.getElementById("gameover").style.display = "block";*/
            show("gameover");
            document.getElementById("gameover").innerHTML = 
             "<p> game over!</p> <p>your score is "+ score +" <p/>";
            //time box dissapper
            /*document.getElementById("timeremaining").style.display ="none";*/
            hide("timeremaining");
            // we want ot hide the correct and try box 
            hide("correct");
            hide("wrong");
            //playing =false; 
            document.getElementById("startreset").innerHTML ="start Game";
            
           }
                         },1000); 
}
    function stopCountDown()
    {
        clearInterval(action);
    }
function hide(Id)
{
     document.getElementById(Id).style.display ="none";
    }
function show(Id){
    
     document.getElementById(Id).style.display ="block";
}
// generate question and multiple answer
function generateQA()
{
    var x = 1+Math.round(9*Math.random());
        var y = 1+Math.round(9*Math.random());
     correctAnswer = x*y;
    
    document.getElementById("question").innerHTML = (x + "*" +y); 
    
    var correctPosition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;// fill with right answer
    // other boxes fill them with wrong answer
   var answers = [correctAnswer];
    for(i= 1;i<5;i++)
        {
        if( i != correctPosition)
        {
           do{
                 wrongAnswer =(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
           } while( answers.indexOf(wrongAnswer)>-1)  
            
            document.getElementById("box"+i).innerHTML  = wrongAnswer;
            answers.push(wrongAnswer);
        }
        
    }
}
    
