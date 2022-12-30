import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { AnimatedMouse } from '../components/animated-mouse';
import { HeadComponent } from '../components/head';

export const Home = () => (
  <>
    <HeadComponent />
    <div className="container">
      <AnimatedMouse />
      <Header />
      <Main />
      <Footer />
    </div>
  </>
)

export default Home