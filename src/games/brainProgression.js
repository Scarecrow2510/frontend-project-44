import getRandomNumber from '../helpers/getRandom.js';
import startGame from '../index.js';

const minProgressionLength = 5;
const maxProgressionLength = 10;
const minProgressionStep = 2;
const maxProgressionStep = 5;

const challenge = 'What number is missing in the progression?';

const getProgression = (length, step) => {
  const result = [];
  const StartNumber = getRandomNumber();
  for (let i = StartNumber; result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getRound = () => {
  const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  const progressionStep = getRandomNumber(minProgressionStep, maxProgressionStep);
  const progression = getProgression(progressionLength, progressionStep);
  const hiddenValueIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(getRound, challenge);
