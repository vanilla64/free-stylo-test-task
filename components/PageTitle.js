import styles from "../styles/Header.module.sass";

function PageTitle({ title }) {
  return (
    <h1 className={styles.header__title}>{ title }</h1>
  );
}

export default PageTitle
