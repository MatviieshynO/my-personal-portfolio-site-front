import styles from '../styles/Auth.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logIn } from '../features/userSlice.js'

export default function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const auth = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/auth', {
        username,
        password,
      })
      if (data) {
        dispatch(logIn(data?.token))
        router.push('/')
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
        <title>Auth</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.container}>
          <div>
            <h1 className="auth-title">Log in to your account</h1>

            <form onSubmit={(e) => e.preventDefault()} className="form">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={auth}>Log In</button>

              <Link href="/registr" legacyBehavior>
                <button>Create acount</button>
              </Link>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/http://localhost:3001/auth', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.message}</h1>
      <p>{data.token}</p>
    </div>
  )
}
