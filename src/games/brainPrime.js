import getRandomNumber from '../helpers/getRandomNumber.js';
import starGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getRound = () => {
  const question = getRandomNumber(0, Math.random() * 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => starGame(getRound, description);
