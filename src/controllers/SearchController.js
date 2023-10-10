import axios from 'axios';

export class SearchController {
  constructor() {}
  getSongs = search => {
    console.log(search);
    return axios
      .get(
        `https://itunes.apple.com/search?term=${search.replace(
          /\s/g,
          '+',
        )}&entity=song&attribute=artistTerm&attribute=songTerm&attribute=albumTerm&media=music`,
      )
      .then(res => res.data);
  };
}
