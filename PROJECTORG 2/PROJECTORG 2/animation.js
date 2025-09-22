// text typing animation


const phrases = [
    '10+ Years of Bodybuilding Expertise',
    'Income Tax Department Professional',
    'Certified Fitness Trainer & Instructor'
  ];
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const outputElement = document.querySelector(".contents");
  
  function typeText() {
    if (currentPhraseIndex < phrases.length) {
      const currentPhrase = phrases[currentPhraseIndex];
      let currentText = currentPhrase.substring(0, currentCharIndex + 1);
      outputElement.textContent = currentText;
  
      currentCharIndex++;
  
      if (currentCharIndex < currentPhrase.length) {
        // Keep typing the current phrase
        setTimeout(typeText, 100);
      } else {
        // Move to the next phrase
        currentPhraseIndex++;
        currentCharIndex = 0;
        setTimeout(typeText, 1500); // Wait for a second before starting the next phrase
      }
    }
    else {
      currentPhraseIndex = currentCharIndex = 0;
      setTimeout(typeText, 1500);
    }
  }
  
  typeText();



  //card sliding


let parentCard = document.querySelector('.careerCard');
let cardTimer;
let preButton = document.querySelector('.pre');
let nextButton = document.querySelector('.next');

nextButton.onclick = function () {
  clearInterval(cardTimer);
  nextSlide();
  cardTimer = setInterval(nextSlide, 5000);
}

function nextSlide() {
  let cardContent = document.querySelectorAll('.cardContent');
  parentCard.appendChild(cardContent[0]);
}

preButton.onclick = () => {
  let cardContent = document.querySelectorAll('.cardContent');
  parentCard.prepend(cardContent[cardContent.length - 1]);
}