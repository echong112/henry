let currIndex = 0;
export const scrollUp = () => ({
  type: 'IS_UP',
  activeIndex: ++currIndex
});

export const scrollDown = () => ({
  type: 'IS_DOWN',
  activeIndex: currIndex <= 0 ? 0 : --currIndex
});

export const setMax = (newMax: number) => {
  currIndex = newMax;
  return ({
    type: 'SET_MAX',
    activeIndex: newMax
  })
}