let currIndex = 0;
export const scrolled = (delta: number) => {
  let activeIndex = delta > 0 ? currIndex <= 0 ? 0 : --currIndex : ++currIndex
  return {
    type: 'SCROLLED',
    activeIndex: activeIndex
  }
}
export const setMax = (newMax: number) => {
  currIndex = newMax;
  return ({
    type: 'SET_MAX',
    activeIndex: newMax
  })
};
export const clickWheel = () => ({
  type: 'CLICKED_WHEEL',
  clicked: true
});
export const unClick = () => ({
  type: 'UNCLICKED',
  clicked: false,
})
export const clickMenuButton = () => ({
  type: 'MENU_BUTTON_CLICKED',
  menuClicked: true,
})
export const unclickMenuButton = () => ({
  type: 'MENU_BUTTON_UNCLICKED',
  menuClicked: false,
})
export const setIsBack = () => ({
  type: 'IS_BACK',
  isBack: true,
})
export const unsetIsBack = () => ({
  type: 'IS_BACK',
  isBack: false,
})