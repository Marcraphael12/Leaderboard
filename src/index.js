import './styles/style.scss';

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hhuU7Jwb1hkX96Lmktcc/scores/';

const request = new XMLHttpRequest(); // The request type

const addButton = document.querySelector('.add-list'); // Submit the form and add a score to the score list
const scoresContainer = document.querySelector('.scores-container'); // Score list container

const displayTheUsersScore = (user) => {
  // for each score list we need a li and some spans to get the score and the name
  user.forEach((score) => {
    const scoreList = document.createElement('li');
    scoreList.classList.add('scores', 'flex', 'flex-jc-sb,', 'flex-ai-c');
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
  const list = JSON.parse(await thePromise());
  return list.result;
}

asyncCall(API);

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

addButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default action of the form

  // We get the data from the inputs
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;

  if (name.length > 0 && score >= 0) {
    // If the inputs are not empty
    sendTheData(name, score); // We send the data
  } else {
    // Else if the inputs are empty
    alert('Please fill in the inputs'); // We alert the user
  }

  // We clear the inputs
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
});

displayTheUsersScore(await asyncCall(API));