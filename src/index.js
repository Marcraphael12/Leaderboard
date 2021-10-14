import './styles/style.scss';

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hhuU7Jwb1hkX96Lmktcc/scores/'; // The API link

const addButton = document.querySelector('.add-list'); // Submit the form and add a score to the score list

// we need to send the data to the API using a function
const sendTheData = () => {
  // we need our inputs values
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
};

// past them as argument to the body
// when the user submit the form the data are sended to the API
