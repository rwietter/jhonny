import { Presentation } from '@components/Presentation';
import { Layout } from '@components/Layout';
import { Shows } from '@components/Shows';
import { Footer } from '@components/Footer';
import { IShow, IShowData } from '@types';
import { filterFutureShows } from '@helpers/filter-future-shows';
import { Playlist } from '@components/Playlist';
import { IPlaylistData } from '@types';
import { sortTracks } from '@helpers/sort-tracks';
import { ErrorBoundary } from 'shared/ErrorBoundary';

type HomeProps = {
  shows: string;
  playlist: string;
}

const Home = (data: HomeProps) => (
  <Layout>
    <ErrorBoundary>
      <Presentation />
    </ErrorBoundary>
    <ErrorBoundary>
      <Playlist playlist={data.playlist} />
    </ErrorBoundary>
    <ErrorBoundary>
      <Shows shows={data.shows} />
    </ErrorBoundary>
    <Footer />
  </Layout>
)

export default Home

const fetchShows = async () => {
  const data = await fetch('https://api.github.com/gists/6b5420dbbce2afdba5c8abdef16d6e8e', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_KEY}`
    }
  })
  return data.json()
}

const fetchMusics = async () => {
  const data = await fetch('https://api.github.com/gists/dde962240eaff9250202fc86b8d79e51', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_KEY}`
    }
  })
  return data.json()
}

export async function getStaticProps() {
  const [showsData, playlistData]: [PromiseSettledResult<IShowData>, PromiseSettledResult<IPlaylistData>] = await Promise.allSettled([
    fetchShows(),
    fetchMusics(),
  ])

  if (showsData.status === 'rejected' || playlistData.status === 'rejected') return {
    props: { shows: JSON.stringify([]), playlist: JSON.stringify([]) },
  }

  let shows = undefined
  if (showsData.status === 'fulfilled') {
    const content: IShow[] = JSON.parse(showsData.value.files['jhonny-shows.json'].content)
    const futureShows = filterFutureShows(content)
    shows = JSON.stringify(futureShows)
  }

  let playlist = undefined
  if (playlistData.status === 'fulfilled') {
    const content = JSON.parse(playlistData.value.files['jhonny-playlist.json'].content)
    const mostRecentTracksFirst = sortTracks(content)
    playlist = JSON.stringify(mostRecentTracksFirst)
  }

  return {
    props: {
      shows,
      playlist,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
