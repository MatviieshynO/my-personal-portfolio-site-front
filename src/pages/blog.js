import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.container}>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
            totam.
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
