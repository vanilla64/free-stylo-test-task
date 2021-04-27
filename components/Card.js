import styles from '../styles/Card.module.sass'

function Card(props) {
  return (
    <li className={styles.card}>
      <div className={styles.card__overlay}>
        <p className={styles.card__text}>Description</p>
      </div>
      <div className={styles.card__preview}></div>
    </li>
  );
}

export default Card;