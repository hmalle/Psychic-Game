
var wins=0;
var losses=0;
var guessesLeft=9;
var guessed = [];
var al; /*the random letter generated*/

function guessRandomAlphabet()
{
  alphabet="abcdefghijklmnopqrstuvwxyz"; /*0 to 25*/
  var index =Math.floor(Math.random()*alphabet.length);
  return alphabet[index];
}

/*-----regex to check if a character is in a to z---*/
function valid(character)
{
  /* returns a null is its not an aphabet */
  return ( character.match(/[a-z]/i));
}

/*--------append to the guessList------*/
function appendGuesses( guessed, pressedKey)
{
  for(var a=1;a<guessed.length;a++)/* starts at 1 coz I initialized the array with space*/
  {
    if( pressedKey==guessed[a])
    {
      return;
    }
  }
  guessed.push(pressedKey);
}

/*------update the screen ---------*/
function updateVariables()
{
  var html ="<p>Guess what letter I'm thinking of</p>"+
            "<p>Wins          : "+wins +"</p>"+
            "<p>Losses        : "+ losses +"</p>"+
            "<p>Guesses Left  : "+ guessesLeft +"</p>"+
            "<p>Guessed So Far: "+ guessed +"</p>" ;     
  document.getElementById("box").innerHTML = html; 
}

function playGame()
{
  /* main loop of the game */
  al = guessRandomAlphabet();
  updateVariables();
  document.onkeyup = function(event)
  {
    var pressedKey = event.key;
    if(valid(pressedKey))
    {
      appendGuesses( guessed, pressedKey);
      if(pressedKey === al)
      {
        wins++;
        guessesLeft = 9;
        guessed = [];
      }
      else
      {
        guessesLeft--;
      }
      if(guessesLeft===0)
      {
        losses++;
        guessesLeft = 9;
        guessed = [];
      }
      updateVariables();
    }
    else
    {
      document.getElementById("box").innerHTML = "Please enter an alphabet guess";
    }
  }
}

playGame();

