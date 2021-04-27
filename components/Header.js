import styles from "../styles/Header.module.sass";
import SearchForm from "./SearchForm";
import Router from "next/router";
import {ROUTES} from "../utils/routes";

function Header(props) {
  const { push } = Router
  const { FAVOURITES } = ROUTES

  const handleClick = () => {
    return push(FAVOURITES)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__topRow}>
        <h1 className={styles.header__title}>Free.Stylo Test Task</h1>
        <button className={styles.header__btn} onClick={handleClick}>Favourites</button>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header
