export const getRandom = (min, max) =>
  Math.floor( min + Math.random() * (max + 1 - min));

export const lengthCheck = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;
