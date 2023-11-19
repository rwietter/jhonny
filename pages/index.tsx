import { Presentation } from '@components/Presentation';
import { Layout } from '@components/Layout';
import { Shows } from '@components/Shows';
import { Footer } from '@components/Footer';
import { Playlist } from '@components/Playlist';
import { ErrorBoundary } from 'shared/ErrorBoundary';
import { GetStaticProps } from 'next';
import { client } from 'graphql/client';
import { GET_SHOWS } from 'graphql/queries/shows';
import { IShow } from 'types/shows';
import { GET_SONGS } from 'graphql/queries/songs';
import { NextSEO } from '@components/SEO';

type PageProps = {
  shows: IShow[]
  songs: any
}

const Home = (props: PageProps) => {
  return (
    <Layout>
      <NextSEO
        title="Jhonny Santanna - Home"
        description="Jhonny Santanna - Cantor e Compositor"
        image=""
        author="Jhonny Santanna"
        url="https://jhonnysantanna.vercel.app/"
        content="website"
      />
    <ErrorBoundary>
      <Presentation />
    </ErrorBoundary>
    <ErrorBoundary>
      <Playlist songs={props.songs} />
    </ErrorBoundary>
    <ErrorBoundary>
      <Shows shows={props.shows} />
    </ErrorBoundary>
    <Footer />
  </Layout>
  )
}

export default Home

// eslint-disable-next-line @next/next/no-typos
export const getStaticProps: GetStaticProps = async () => {
  const promise = Promise.all([
    client.query({
      query: GET_SONGS
    }),
    client.query({
      query: GET_SHOWS
    })
  ]);

  const [songs, shows] = await promise;

  return {
    props: {
      shows: shows.data.shows.data,
      songs: songs.data.musicas.data,
    },
    revalidate: 1800 // 30 minutes
  }
}