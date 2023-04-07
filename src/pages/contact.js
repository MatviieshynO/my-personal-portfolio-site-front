import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.container}>
          <div>
            <p>Email : Olopromotion@gmail.com</p>
            <p>Telephone number : 661-737-390</p>
            <p>
              Linkedin :
              <a href="https://www.linkedin.com/in/oleh-matviieshyn-10230020a/">
                {' '}
                https://www.linkedin.com/in/oleh-matviieshyn-10230020a/
              </a>
            </p>
            <p>
              Facebook :
              <a href="https://www.facebook.com/oleg.matviieshyn/">
                {' '}
                https://www.facebook.com/oleg.matviieshyn/
              </a>
            </p>
            <p>
              Instagram :
              <a href="https://www.instagram.com/olehmatviieshyn/">
                {' '}
                https://www.instagram.com/olehmatviieshyn/
              </a>
            </p>
            <p>
              Github :
              <a href="https://github.com/MatviieshynO">
                https://github.com/MatviieshynO
              </a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
