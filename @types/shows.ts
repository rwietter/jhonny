export interface IShowData {
  files: {
    'jhonny-shows.json': {
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

export interface IShow {
  show: string;
  local: string;
  date: string;
}
