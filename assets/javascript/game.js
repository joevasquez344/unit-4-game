$(document).ready(function(){
    var randNumber = Math.floor(Math.random() * 112) + 9;
    $('#randomNumber').html(randNumber);

    var randCrystalNum1 = Math.floor(Math.random()*12) + 1;
    var randCrystalNum2 = Math.floor(Math.random()*12) + 1;
    var randCrystalNum3 = Math.floor(Math.random()*12) + 1;
    var randCrystalNum4 = Math.floor(Math.random()*12) + 1;


    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').html(wins);
    $('#losses').html(losses);

    var resetGame = function(){
        // generates a random number when the resetGame function is invoked
        randNumber = Math.floor(Math.random() * 112) + 9;

        //generates a random number for a crystal when the resetGame function is invoked
        randCrystalNum1 = Math.floor(Math.random()*12) + 1;
        randCrystalNum2 = Math.floor(Math.random()*12) + 1;
        randCrystalNum3 = Math.floor(Math.random()*12) + 1;
        randCrystalNum4 = Math.floor(Math.random()*12) + 1;

        // resets totalScore back to 0 when resetGame function is invoked
        totalScore = 0;

        // displays the reset of totalScore back to 0 when resetGame is invoked;
        $('#totalScore').html(totalScore);

       
        

        // wipes whatever number is being displayed into a blank state when resetGame is invoked
        $('#btn1').addClass('.appear');
        $('#btn2').addClass('.appear');
        $('#btn3').addClass('.appear');
        $('#btn4').addClass('.appear');

        // displays the new randomly generated number when resetGame is invokec
        $('#randomNumber').html(randNumber);
        
    }
    
    var alertWin = function(){
        alert("Win");
        wins++;
        $('#wins').html(wins);
        resetGame();
    }

    var alertLoss = function(){
        alert("Loss");
        losses++;
        $('#losses').html(losses);
        resetGame();
    }


   
    
    
    
    
    // comments withing this function apply to all of the other click events as well
    $('#btn1').on('click', function(){
        // when clicking this crystal button, a random number is generated
        randCrystalNum1 = Math.floor(Math.random()*12) + 1;

        // displays that random number generated
        $('#btn1').html(randCrystalNum1);

        // everytime this button/crystal is clicked, add each randomly generated number to the variable totalScore
        totalScore = totalScore + randCrystalNum1;
        
        // displays the current totalScore
        $('#totalScore').html(totalScore);
        
        // if the totalScore equals the random number generated, invoke the alertWin function
        // which will add 1 to the win counter,
        // reset the game to its default state,
        // and display its default state
        if(totalScore === randNumber){
            alertWin();
        }
        // if the totalScore is greater than the random number generated,
        // that means you lost and an alert will pop up notifying that you lost,
        // as well as adding 1 to the losses counter and resetting the game to its default state
        else if(totalScore > randNumber){
            alertLoss();
        }

        
        
        
        
        
    });


    $('#btn2').on('click', function(){
        randCrystalNum2 = Math.floor(Math.random()*12) + 1;
        $('#btn2').html(randCrystalNum2);
        totalScore = totalScore + randCrystalNum2;
       
        $('#totalScore').html(totalScore);
        
        if(totalScore === randNumber){
            alertWin();
        }else if(totalScore > randNumber){
            alertLoss();
        }

        
        
        
        
        
    });


    $('#btn3').on('click', function(){
        randCrystalNum3 = Math.floor(Math.random()*12) + 1;
        $('#btn3').html(randCrystalNum3);
        totalScore = totalScore + randCrystalNum3;
        $('#totalScore').html(totalScore);
        

        if(totalScore === randNumber){
            alertWin();
        }else if(totalScore > randNumber){
            alertLoss();
        }

        
       
        
        

    });


    $('#btn4').on('click', function(){

        // generates a random number
        randCrystalNum4 = Math.floor(Math.random()*12) + 1;

        // displays that random number  
        $('#btn4').html(randCrystalNum4);

        // adds that number to the current total score
        totalScore = totalScore + randCrystalNum4;

        // display the current score
        $('#totalScore').html(totalScore);

        if(totalScore === randNumber){
            alertWin();
        }else if(totalScore > randNumber){
            alertLoss();
        }

        
       
        
        
        
    });


    
    
    
    
    
    
    
  
    
 
    
        
    
    
    
   
    
    

})

