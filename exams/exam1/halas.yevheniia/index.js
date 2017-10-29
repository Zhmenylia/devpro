function sumOfDividers(n) {
  let sum = 1;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

function checkNumbers(startNumber, endNumber) {
  if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber))
    return false;

  if (startNumber < 0 || endNumber < 0)
    return false;

  if (startNumber > endNumber)
    return false;

  return true;
}

function getFriendlyNumbers(startNumber, endNumber) {
  const validNumbers = checkNumbers(startNumber, endNumber);

  if (!validNumbers)
    return false;

  const friendNumbers = [];

  for (let i = startNumber; i <= endNumber; i++) {
    const sum = sumOfDividers(i);

    const inRange = sum >= startNumber && sum <= endNumber;
    const selfFriend = sum === i;
    const olderFriend = sum > i;

    if (inRange && !selfFriend && olderFriend) {
      if (sumOfDividers(sum) === i) {
        const friends = [i, sum];
        friendNumbers.push(friends);
      }
    }
  }

  return friendNumbers;
}

module.exports = {
  firstName: 'Yevheniia',
  secondName: 'Halas',
  task: getFriendlyNumbers
};