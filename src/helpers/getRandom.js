const getRandomFromRangeOf = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

export { getRandomNumber, getRandomFromRangeOf };
