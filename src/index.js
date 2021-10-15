import './styles/style.scss';

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hhuU7Jwb1hkX96Lmktcc/scores/';

const request = new XMLHttpRequest(); // The request type

const addButton = document.querySelector('.add-list'); // Submit the form and add a score to the score list
const scoresContainer = document.querySelector('.scores-container'); // Score list container

const displayTheUsersScore = (user) => {
  // for each score list we need a li and some spans to get the score and the name
  user.forEach((score) => {
    const scoreList = document.createElement('li');
    scoreList.classList.add('scores', 'flex', 'flex-jc-sb', 'flex-ai-c');
    scoreList.innerHTML = `<span class="score-name">${score.user}</span> <span class="score-score">${score.score}</span>`;

    // Then we add the user's score to the score list
    scoresContainer.appendChild(scoreList);
  });
};

const thePromise = (url) => new Promise((resolve) => {
  request.open('GET', url);
  request.onload = () => {
    if (request.status === 200) { // If the request is successful
      resolve(request.response); // resolve the promise
    } else { // else if the request is not successful
      resolve('error'); // return an error
    }
  };
  request.send(); // Send the request
});

async function asyncCall(url) {
  thePromise(url);
  const list = JSON.parse(await thePromise(API));
  return list.result;
}

asyncCall(API);

// we ne only the last items from the API to be return
const removeListItems = () => {
  const ul = document.querySelector('.scores-container');
  let child = ul.lastElementChild;

  // While our score container has a child
  while (child) {
    // We remove the child
    ul.removeChild(child);
    // We get the next child, wich is added but not showed
    child = ul.lastElementChild;
  }
};

// we need to refresh our App to get the last updates
const refreshBtn = document.querySelector('.refresh-button');

// By clicking on the refesh button, we print the score added to the leaderboard
refreshBtn.addEventListener('click', async () => {
  // we first get items added
  removeListItems();
  // we then display it from the API
  displayTheUsersScore(await asyncCall(API));
});

const sendTheData = (name, score) => {
  // we ne the data to be sended
  const data = `user=${name}&score=${score}`; // The data from the inputs

  // We create the request by using the post method
  request.open('POST', API, true);

  // We set the header to be json
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // We send the data
  request.send(data);
};

// Here we check if the iputs are correct or not
const inputs = document.querySelectorAll('.name-score');
for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener('input', () => {
    if (inputs[i].validity.valid) {
      inputs[i].style.border = '3px solid green';
    } else {
      inputs[i].style.border = '3px solid red';
    }
  });
}

addButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default action of the form
  const isNumber = (el) => /^[0-9]+$/.test(el) && !(/[a-z]/.test(el) || !/[A-Z]/.test(el));
  // We get the data from the inputs
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;

  // we check if the data entered is a number
  if (!isNumber(score)) {
    document.querySelector('.score').setCustomValidity('Hey dear, use numbers only please!');
  }

  if ((name.length > 0) && (score >= 0)) {
    // If the inputs are not empty
    sendTheData(name, score); // We send the data
  } else {
    throw new Error('Check your input!');
  }
  // We clear the inputs
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
});

const show = await asyncCall(API);
displayTheUsersScore(show);