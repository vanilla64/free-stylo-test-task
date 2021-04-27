import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Main from "../components/Main";
import Card from "../components/Card";

export default function Home() {

  return (
    <Page>
      <Head>
        <title>Home | Free.Stylo</title>
      </Head>
      <Header />
      <Main>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </Main>
      <Footer />
    </Page>
  )
}
