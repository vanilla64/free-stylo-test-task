import Head from 'next/head'
import Page from "../components/Page";
import HomePageHeader from "../components/HomePageHeader";
import Main from "../components/Main";
import Cards from "../components/Cards";
import Card from "../components/Card";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import api from "../utils/Api";
import {
  getSearchVideosFromLS,
  saveSearchVideosInLS
} from "../utils/localData";

export default function Home() {
  const [channel, setChannel] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const localCards = getSearchVideosFromLS()
    // if (!localCards) return
    setCards(localCards)

    if (!channel._id) return
    api.getChannelVideos(channel._id).then(res => {
      res.videos.forEach(item => item.saved = false)
      saveSearchVideosInLS(res.videos)
      setCards(getSearchVideosFromLS())
    })
  }, [channel])

  return (
    <Page>
      <Head>
        <title>Home | Free.Stylo</title>
      </Head>
      <HomePageHeader
        data={channel}
        setData={setChannel}
      />
      <Main>
        <Cards>
          {
            cards && cards.map((card, i) => ( <Card key={i} data={card}/> ))
          }
        </Cards>
      </Main>
      <Footer />
    </Page>
  )
}
