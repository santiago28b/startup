function displayRiddle(data) {
    fetch('https://riddles-api.vercel.app/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#riddle');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('riddle');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }
  displayQuote()