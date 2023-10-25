import {TYPES} from './Actions';

export const soundBarReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.TOGGLE_SOUND_BAR:
      const {trackName, preview, artwork, artist, sound, showSoundBar} =
        action.payload;
      const soundBarData = {
        trackName: trackName,
        preview: preview,
        artwork: artwork,
        artist: artist,
        sound: sound,
        showSoundBar: showSoundBar,
      };
      return soundBarData;
    default:
      return state;
  }
};
