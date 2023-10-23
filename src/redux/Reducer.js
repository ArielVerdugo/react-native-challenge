export const soundBarReducer = (state = [], action) => {
  const soundBarData = {
    trackName: action.payload?.trackName,
    preview: action.payload?.preview,
    artwork: action.payload?.artwork,
    artist: action.payload?.artist,
    sound: action.payload?.sound,
    showSoundBar: action.payload?.showSoundBar,
  };
  return soundBarData;
};
