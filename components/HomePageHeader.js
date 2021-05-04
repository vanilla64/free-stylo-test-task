import Header from "./Header";
import styles from "../styles/Header.module.sass";
import SearchForm from "./SearchForm";
import Router from "next/router";
import {ROUTES} from "../utils/routes";
import PageTitle from "./PageTitle";

function HomePageHeader(props) {
  const { data, setData } = props
  const { push } = Router
  const { FAVOURITES } = ROUTES

  const handleClick = () => {
    return push(FAVOURITES)
  }

  return (
    <Header>
      <div className={styles.header__topRow}>
        <PageTitle title={'Free.Stylo Test Task'} />
        <button className={styles.header__btn} onClick={handleClick}>Favourites</button>
      </div>
      <SearchForm
        setData={setData}
      />
    </Header>
  );
}

export default HomePageHeader;