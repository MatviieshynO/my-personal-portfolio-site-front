import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className="title-logo">
        <Image src="/LOGO.gif" alt="Logo" width={250} height={290} />
      </div>

      <nav>
        <Link href="/" legacyBehavior>
          <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a className={router.pathname == '/blog' ? 'active' : ''}>Blog</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={router.pathname == '/contact' ? 'active' : ''}>
            Contact
          </a>
        </Link>
      </nav>
      <div className="title-banner">
        <Image src="/banner.gif" alt="Logo" width={300} height={300} />
      </div>
      <div className={styles.socialMedia}>
        <Link
          href="https://www.linkedin.com/in/oleh-matviieshyn-10230020a/"
          target="_blank"
          title="Linkedin"
        >
          <AiOutlineLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/oleg.matviieshyn/"
          target="_blank"
          title="facebook"
        >
          <AiOutlineFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/olehmatviieshyn/"
          target="_blank"
          title="instagram"
        >
          <AiOutlineInstagram />
        </Link>
        <Link
          href="https://github.com/MatviieshynO"
          target="_blank"
          title="github"
        >
          <AiOutlineGithub />
        </Link>
      </div>
    </div>
  )
}
