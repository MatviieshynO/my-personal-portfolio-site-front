import styles from '../styles/Registr.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Registr() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()

  const registr = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/registr', {
        username,
        password,
        email,
      })
      if (data) {
        router.push('/auth')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    gsap.fromTo(
      '.form',
      {
        x: 250,
      },
      {
        x: 0,
        duration: 1.5,
      }
    )
    gsap.fromTo(
      '.auth-title',
      {
        y: -250,
      },
      {
        y: 0,
        duration: 1.5,
      }
    )
  }, [])
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.container}>
          <div>
            <h1 className="auth-title">Registration</h1>
            <form onSubmit={(e) => e.preventDefault()} className="form">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={registr}>Create acount</button>
              <Link href="/auth" legacyBehavior>
                <button>Back to LogIn</button>
              </Link>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
