let currCount = 0
export const scrollUp = () => ({
  type: 'IS_UP',
  isUp: ++currCount
});

export const scrollDown = () => ({
  type: 'IS_DOWN',
  isUp: --currCount
});
