export const TYPES = {
  TOGGLE_SOUND_BAR: 'TOGGLE_SOUND_BAR',
};

const soundBar = soundBarData => ({
  type: TYPES.TOGGLE_SOUND_BAR,
  payload: soundBarData,
});

export const toggleSoundBar = soundBarData => dispatch => {
  dispatch(soundBar(soundBarData));
};
