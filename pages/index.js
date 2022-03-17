import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/banner'
import Navbar from '../components/Nav/navbar'
import SectionCards from '../components/SectionCard/section-card'
import Card from '../components/Card/card'
import { getVideos } from '../lib/videos'

export async function getServerSideProps() {
  const disneyVideos = await getVideos();
  return { props: {disneyVideos} };
}

export default function Home({disneyVideos}) {
  console.log({disneyVideos});

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Clone</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        userName='email@email.com'
      />

      <Banner
        title='Clifford the red dog'
        subTitle='A very cute dog'
        imgUrl='/static/clifford.jpeg'
      />

      <div className={styles.sectionWrapper}>
        <SectionCards
          videos={disneyVideos}
          title='Disney'
        />
      </div>

    </div>
  )
}
