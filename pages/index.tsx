import { Presentation } from '../components/main';
import { Layout } from '../components/layout';
import { Shows } from '../components/Shows';

type Props = {
  shows: string;
}

export const Home = (data: Props) => {
  return (
    <Layout>
      <Presentation />
      <Shows shows={data.shows} />
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  const data = await fetch('https://api.github.com/gists/6b5420dbbce2afdba5c8abdef16d6e8e', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_KEY}`
    }
  })

  const dataJson = await data.json()

  return {
    props: {
      shows: dataJson.files['jhonny-shows.json'].content
    },
  }
}
