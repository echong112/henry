/* ######################################################################### */
/* ########################       Actions       ############################ */
/* ######################################################################### */

export const scrolled = (delta: number) => ({
  type: 'SCROLLED',
  activeIndex: delta > 0 ? 1 : -1
});

export const resetScroll = () => ({
  type: 'SCROLLED',
  activeIndex: 0
});

/* ######################################################################### */
let saved = Array<number>();
export const savePlace = (index: number) => {
  saved.push(index);
  return {
    type: 'SAVE_INDEX',
    savedIndexes: saved
  }
};

export const setPlace = () => {
  saved.pop();
  return {
    type: 'SAVE_INDEX',
    savedIndexes: saved
  }
}

/* ######################################################################### */
export const playMedia = () => ({
  type: 'PLAY_MUSIC',
  isPlaying: true
});

export const stopMedia = () => ({
  type: 'PLAY_MUSIC',
  isPlaying: false
});

export const toggleMedia = (isPlaying: boolean) => ({
  type: 'PLAY_MUSIC',
  isPlaying: !isPlaying
});

/* ######################################################################### */
export const prevTrack = () => ({
  type: 'NAVIGATE_TRACK',
  track: -1
});
export const nextTrack = () => ({
  type: 'NAVIGATE_TRACK',
  track: 1
});
export const resetTrack = () => ({
  type: 'NAVIGATE_TRACK',
  track: 0
});

/* ######################################################################### */
export const activeTrack = (track: number) => ({
  type: 'ACTIVE_TRACK',
  activeTrack: track
});

/* ######################################################################### */
export const setTrack = (index: number) => ({
  type: 'NAVIGATE_TRACK',
  track: index
});

export const setTitle = (title: string) => ({
  type: 'TITLE_SET',
  title: title
});

/* ######################################################################### */
export const clickWheel = () => ({
  type: 'CLICKED_WHEEL',
  clicked: true
});
export const unClick = () => ({
  type: 'UNCLICKED',
  clicked: false,
});

/* ######################################################################### */
export const clickMenuButton = () => ({
  type: 'MENU_BUTTON_CLICKED',
  menuClicked: true,
});
export const unclickMenuButton = () => ({
  type: 'MENU_BUTTON_UNCLICKED',
  menuClicked: false,
});

/* ######################################################################### */
export const setIsBack = () => ({
  type: 'IS_BACK',
  isBack: true,
});
export const unsetIsBack = () => ({
  type: 'IS_BACK',
  isBack: false,
});

/* ######################################################################### */
export const setProgress = (progress: number) => ({
  type: 'PROGRESSING',
  progress: progress,
});
