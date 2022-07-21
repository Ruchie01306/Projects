var isFlipped = false;
var firstCard, secondCard;


const cards = document.querySelectorAll(".card");
//console.log(cards);

cards.forEach((card) => { card.addEventListener("click", flip)});

function flip(){
  // console.log("flipping.......");
  // console.log(this);
  this.classList.add("flip");

  if(!isFlipped){
    isFlipped = true;
    firstCard = this;
  }
  else{
    secondCard = this;
    checkIt();
  }
}

var checkIt = () => {
  //console.log("checking...");
  if(firstCard.dataset.image === secondCard.dataset.image){
    success();
  }
  else{
    failure();
  }
}

var success = () => {
  console.log("Success");
  alert("YAYYYY!!! You Won!!!!!");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

var failure = () => {
  //console.log("Failure");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
   
}

var reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}


(function shuffle(){
  cards.forEach((card) => {
    var index =Math.floor(Math.random() *16);
    card.style.order = index;
  })
})();


