import { create } from 'zustand';

interface Song {
  id: string;
  name: string;
  youtube: string;
  spotify: string;
  year: string;
}

type State = {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
  getSongs: () => Song[];
}

const useSongs = create<State>((set, get) => ({
  songs: [],
  setSongs: (songs: Song[]) => set({ songs: songs }),
  getSongs: () => get().songs,
}));

export { useSongs }
