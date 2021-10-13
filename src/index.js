import './styles/style.scss';
import listElements from './lists.js';

const container = document.querySelector('.recent-scores');
const list = listElements();

container.appendChild(list);
