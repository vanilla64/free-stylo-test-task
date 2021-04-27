import styles from "../styles/Home.module.sass"
import Router from 'next/router'
import { ROUTES } from "../utils/routes";
import Head from "next/head";

export default function Favourites() {
  const { push } = Router
  const { ROOT } = ROUTES

  const handleClick = () => {
     return push(ROOT)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Favourites | Free.Stylo</title>
      </Head>

      <header>
        <h1 className={styles.title}>Favourites</h1>
        <button onClick={handleClick}>Main</button>
      </header>

      <main className={styles.main} />

    </div>
  )
}