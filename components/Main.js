import styles from '../styles/Home.module.sass'

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      { children }
    </main>
  )
}