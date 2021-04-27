import styles from '../styles/SearchForm.module.sass'

function SearchForm(props) {
  return (
    <form className={styles.searchForm}>
      <input className={styles.searchForm__input} type="text" placeholder="Enter channel"/>
      <button className={styles.searchForm__btn} type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
