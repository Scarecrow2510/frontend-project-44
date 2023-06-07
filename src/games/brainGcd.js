import getRandomNumber from '../helpers/getRandom.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y === 0) return x;
  return getGCD(y, x % y);
};

const getRound = () => {
  const firstValue = getRandomNumber(0, Math.random() * 100);
  const secondValue = getRandomNumber(0, Math.random() * 100);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = getGCD(firstValue, secondValue).toString();
  return [question, correctAnswer];
};

export default () => startGame(getRound, description);
