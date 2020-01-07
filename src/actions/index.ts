let currIndex = 0;

export const scrollUp = () => ({
  type: 'IS_UP',
  activeIndex: ++currIndex
});

export const scrollDown = () => ({
  type: 'IS_DOWN',
  activeIndex: --currIndex
});
