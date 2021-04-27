import styles from '../styles/Page.module.sass'

function Page({ children }) {
  return (
    <div className={styles.page}>
      { children }
    </div>
  );
}

export default Page;