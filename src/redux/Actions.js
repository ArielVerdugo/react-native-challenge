export const TYPES = {
  TOGGLE_SOUND_BAR: 'TOGGLE_SOUND_BAR',
};

const soundBar = songData => ({
  type: TYPES.TOGGLE_SOUND_BAR,
  payload: songData,
});

export const toggleSoundBar = songData => dispatch => {
  dispatch(soundBar(songData));
};
