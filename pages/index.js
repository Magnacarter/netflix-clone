import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/banner'
import Navbar from '../components/Nav/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Clone</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Banner 
        title='Clifford the red dog'
        subTitle='A very cute dog'
        imgUrl='/static/clifford.jpeg'
      />

      {/* <Card /> */}
    </div>
  )
}
