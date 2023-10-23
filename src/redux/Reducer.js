import {TYPES} from './Actions';

export const soundBarReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.TOGGLE_SOUND_BAR:
      const soundBarData = {
        trackName: action.payload?.trackName,
        preview: action.payload?.preview,
        artwork: action.payload?.artwork,
        artist: action.payload?.artist,
        sound: action.payload?.sound,
        showSoundBar: action.payload?.showSoundBar,
      };
      return soundBarData;
    default:
      return state;
  }
};
