export const scrolled = (delta: number) => {
  let activeIndex = delta > 0 ? 1 : -1
  return {
    type: 'SCROLLED',
    activeIndex: activeIndex
  }
}
export const resetScroll = () => {
  return {
    type: 'SCROLLED',
    activeIndex: 0
  }
}
export const setTitle = (title: string) => {
  return {
    type: 'TITLE_SET',
    title: title
  }
}
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