import styles from '../styles/Cards.module.sass'

function Cards({ children }) {
  return (
    <section className={styles.cards}>
      <ul className={styles.cards__list}>
        <>
          { children }
        </>
      </ul>
    </section>
  );
}

export default Cards;
