import Head from 'next/head'
import styles from '../styles/Home.module.css'
//components
import Navbar from '../components/Navbar.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Footer from '../components/Footer.js'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.mainWrapper}>
        <Navbar />
        <div className={styles.container}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  )
}
