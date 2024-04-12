function displayRiddle(data) { //  
    console.log("este el el api")
    fetch('https://riddles-api.vercel.app/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#riddle');
  
        const riddleEl = document.createElement('p');
        riddleEl.classList.add('riddle');
        const answerEl = document.createElement('p');
        answerEl.classList.add('answer');
  
        riddleEl.textContent = `Riddle: ${data.riddle}`;
        answerEl.textContent = `Answer: ${data.answer}`;
  
        containerEl.appendChild(riddleEl);
        containerEl.appendChild(answerEl);
      });
  }
  displayRiddle()

  