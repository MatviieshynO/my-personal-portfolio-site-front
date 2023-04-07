/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import styles from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { useEffect } from 'react'
import Image from 'next/image'

export default function about() {
  useEffect(() => {
    gsap.fromTo(
      '.about-title',
      {
        y: -250,
      },
      {
        y: 0,
        duration: 1.5,
      }
    )
    gsap.fromTo(
      '.my-photo',
      {
        x: 300,
        opacity: 0,
      },
      {
        y: 50,
        x: 0,
        opacity: 0.9,
        duration: 1.5,
      }
    )
  }, [])

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.title}>
            <h2 className="about-title">General information about me</h2>
            <p>
              Good afternoon, my name is Oleg Matvieshyn. I am 31 years old. I
              live in Poland Wroclaw city. I position myself as a beginner
              Full-Stack Developer. I dont do programming professionally, its my
              hobby. But I decided to try to understand this in more detail and
              maybe I will be lucky to find a job.
            </p>
            <p>
              This site is a business card or portfolio site and I will develop
              it as it becomes more popular, it will have registration and
              authorization, thanks to Express js and MongoDB I will write the
              back-end. The front-end is written in Next js.
            </p>
            <Image
              src="/Myphoto.jpg"
              alt="My photo"
              width={200}
              height={310}
              className="my-photo"
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
