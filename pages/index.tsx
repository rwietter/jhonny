import { Presentation } from '@components/Presentation';
import { Layout } from '@components/Layout';
import { Shows } from '@components/Shows';
import { Footer } from '@components/Footer';
import { Playlist } from '@components/Playlist';
import { ErrorBoundary } from 'shared/ErrorBoundary';

const Home = () => (
  <Layout>
    <ErrorBoundary>
      <Presentation />
    </ErrorBoundary>
    <ErrorBoundary>
      <Playlist />
    </ErrorBoundary>
    <ErrorBoundary>
      <Shows />
    </ErrorBoundary>
    <Footer />
  </Layout>
)

export default Home