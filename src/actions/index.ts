let currIndex = 0;
let max = 3;
export const scrollUp = () => ({
  type: 'IS_UP',
  activeIndex: ++currIndex
});

export const scrollDown = () => ({
  type: 'IS_DOWN',
  activeIndex: currIndex <= 0 ? 0 : --currIndex
});

// set max 

export const setMax = (newMax: number) => {
  currIndex = newMax;
  return ({
    type: 'SET_MAX',
    activeIndex: newMax
  })
}