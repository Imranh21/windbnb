import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import RoomList from '../components/RoomList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Windbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <RoomList />
      <Footer />
    </div>
  )
}
