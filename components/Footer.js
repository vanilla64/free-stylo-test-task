import styles from '../styles/Footer.module.sass'

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>&copy; Sergey Mashin 2021</p>
    </footer>
  );
}

export default Footer;
