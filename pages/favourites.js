import { useEffect, useState } from "react";
import styles from "../styles/Header.module.sass"
import Router from 'next/router'
import { ROUTES } from "../utils/routes";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import Page from "../components/Page";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { getCardsFromLS } from '../utils/localData'
import Card from "../components/Card";

export default function Favourites() {
  const [cards, setCards] = useState([]);

  const { push } = Router
  const { ROOT } = ROUTES

  useEffect(() => {
    const savedCards = getCardsFromLS()
    console.log(savedCards)
    if (!savedCards) return

    setCards(savedCards)
  }, [])

  const handleClick = () => {
     return push(ROOT)
  }

  return (
    <Page>
      <Head>
        <title>Favourites | Free.Stylo</title>
      </Head>
      <Header>
        <div className={styles.header__topRow}>
          <PageTitle title={'Favourites'} />
          <button className={styles.header__btn} onClick={handleClick}>Home</button>
        </div>
      </Header>
      <Main>
        <Cards>
          {
            cards.map((card, index) => (
              <Card key={index} data={card} setCardsToRender={setCards}/>
            ))
          }
        </Cards>
      </Main>
      <Footer />
    </Page>
  )
}
