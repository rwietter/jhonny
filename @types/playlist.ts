export interface IPlaylistData {
  files: {
    'jhonny-playlist.json': {
      filename: string,
      type: string,
      language: null | string,
      raw_url: string,
      size: number,
      truncated: boolean,
      content: string
    }
  }
}

export interface IPlaylist {
  name: string;
  url: string;
  date: string;
}
