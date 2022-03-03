let numberUser = document.querySelector("#number");
let numberGuessedByUser;
let submit = document.querySelector("#submit");
numberUser.addEventListener("change",numberOnchange);
submit.addEventListener("click",submitClickedEvent);
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let randomized = shuffle(myArray);
let numberGuessedByComputer = randomized[0];
//
function submitClickedEvent(e){
  if(numberGuessedByComputer == numberGuessedByUser)
  {
    alert(`Awesome! You number ${numberGuessedByUser} was correct. You can be named many things, hungry not being one of them.`);
  }
  if((numberGuessedByUser -1 == numberGuessedByComputer) ||(numberGuessedByUser+1 == numberGuessedByComputer))
  {
    alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
  }
  else
  {
    alert(`Bummer... You guessed ${numberGuessedByUser} and the secret number was ${numberGuessedByComputer}.`)
  }
};

//reads the number value when the user changes it
function numberOnchange(e){
  numberGuessedByUser = numberUser.value;
};

//Shuffle an array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};
