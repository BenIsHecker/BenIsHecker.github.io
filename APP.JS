const form = document.getElementById('search-form');
const wordInput = document.getElementById('word-input');
const outputBox = document.getElementById('output-box');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const word = wordInput.value;
  const apiUrl = `https://api.urbandictionary.com/v0/define?term=${word}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.list.length > 0) {
        const definition = data.list[0].definition;
        outputBox.textContent = definition;
      } else {
        outputBox.textContent = 'No definition found for this word.';
      }
    })
    .catch(error => {
      console.error(error);
      outputBox.textContent = 'An error occurred while fetching data from the API.';
    });
});
