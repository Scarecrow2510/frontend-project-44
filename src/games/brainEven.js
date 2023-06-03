import { getRandomNumber } from '../helpers/getRandom.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(getRound, description);
