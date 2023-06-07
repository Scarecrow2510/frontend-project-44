import getRandomNumber from '../helpers/getRandom.js';
import startGame from '../index.js';

const operators = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error(`invalid expression: '${a} ${operator} ${b}'`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(0, Math.random() * 100);
  const number2 = getRandomNumber(0, Math.random() * 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator).toString();
  return [question, answer];
};

export default () => startGame(getRound, description);
