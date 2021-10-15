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

    // The we add the user's score to the score list
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