import getRandomNumber from '../helpers/getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(getRound, description);
