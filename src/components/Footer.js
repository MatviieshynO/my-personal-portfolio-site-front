import styles from './Footer.module.css'

export default function Footer() {
  const date = new Date()
  return (
    <div className={styles.wrapperFooter}>
      <p>© {date.getFullYear()} author Matviieshyn Oleh</p>
      <p>Copying materials is possible only with a link to my site.</p>
    </div>
  )
}
