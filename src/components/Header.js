import styles from './Header.module.css'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../features/userSlice.js'
export default function Header() {
  const token = useSelector((state) => state.user.isToken)
  const dispatch = useDispatch()

  return (
    <div className={styles.headerContainer}>
      <div className={styles.auth} title="LogIn">
        {token ? (
          <button onClick={() => dispatch(logIn(false))}>Log Out</button>
        ) : (
          <Link href="/auth" legacyBehavior>
            <button>Log In</button>
          </Link>
        )}
      </div>

      <div className={styles.buttons}>
        <Link href="/" legacyBehavior>
          <button>text</button>
        </Link>
        <Link href="/" legacyBehavior>
          <button>text</button>
        </Link>
      </div>
    </div>
  )
}
