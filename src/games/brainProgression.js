import getRandomNumber from '../helpers/getRandom.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (length, step) => {
  const result = [];
  const startNumber = getRandomNumber(0, Math.random() * 100);
  for (let i = startNumber; result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(2, 5);
  const progression = getProgression(progressionLength, progressionStep);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(getRound, description);
