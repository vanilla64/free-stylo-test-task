import styles from "../styles/Header.module.sass";

function Header({ children }) {

  return (
    <header className={styles.header}>
      { children }
    </header>
  );
}

export default Header
