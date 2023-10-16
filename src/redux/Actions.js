export const TYPES = {
  SHOW_SOUND_BAR: 'SHOW_SOUND_BAR',
};

const soundBar = songData => ({
  type: TYPES.SHOW_SOUND_BAR,
  payload: songData,
});

export const showSoundBar = songData => dispatch => {
  dispatch(soundBar(songData));
};
