import {
  Album1,
  Album2,
  Album3,
  Album4,
  Album5,
  Album6,
  Album7,
  Album8,
} from '../../assets/images';

const DIVIDER_SIZES = {TINY: 16, SHORT: 24, LONG: 48};

const DATA = [
  {
    title: 'Playlists',
    icon: 'playlist-music',
  },
  {
    title: 'Artists',
    icon: 'microphone-variant',
  },
  {
    title: 'Albums',
    icon: 'album',
  },
  {
    title: 'Songs',
    icon: 'music-note-eighth',
  },
  {
    title: 'Made For You',
    icon: 'account-box-outline',
  },
];

const RECENTLY_ADDED_DATA = [
  {
    id: 'drake',
    artist: 'Drake',
    song: 'Hotline Bling',
    cover: Album1,
  },
  {
    id: 'ellie',
    artist: 'Ellie Goulding',
    song: 'Burn',
    cover: Album2,
  },
  {
    id: 'mgk',
    artist: 'Machine Gun Kelly',
    song: "my ex's best friend ",
    cover: Album8,
  },
  {
    id: 'paramore',
    artist: 'Paramore',
    song: 'Brick My Boring Brick',
    cover: Album4,
  },
];

const FOR_YOU_DATA = [
  {
    id: 'justin-bieber',
    artist: 'Justin Bieber',
    song: 'Ghost',
    cover: Album7,
  },
  {
    id: 'riseagainst',
    artist: 'Rise Against',
    song: 'Endgame',
    cover: Album5,
  },
  {
    id: 'maroon5',
    artist: 'Maroon 5',
    song: 'Payphone',
    cover: Album3,
  },
  {
    id: 'nickelback',
    artist: 'Nickelback',
    song: "Savin' Me",
    cover: Album6,
  },
];

export {DATA, RECENTLY_ADDED_DATA, FOR_YOU_DATA, DIVIDER_SIZES};
