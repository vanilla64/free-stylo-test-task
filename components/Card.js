import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/Card.module.sass';
import {
  getCardsFromLS,
  getSearchVideosFromLS,
  saveCardInLS,
  saveSearchVideosInLS
} from "../utils/localData";

function Card({ data, setCardsToRender }) {
  const { title, preview, url, saved, _id } = data
  const [isSavedCard, setIsSavedCard] = useState(saved);
  const router = useRouter()

  const handleSaveClick = () => {
    const savedCards = getCardsFromLS()
    const localCards = getSearchVideosFromLS()

    if (!isSavedCard) {

      localCards.forEach(i => {
        if (i._id === _id) return i.saved = true
      })

      saveSearchVideosInLS(localCards)

      if (!savedCards) {
        data.saved = true
        setIsSavedCard(true)
        saveCardInLS([data])
        return
      }
      if (savedCards.length >= 1) {
        data.saved = true
        savedCards.push(data)
        saveCardInLS(savedCards)
        setIsSavedCard(true)
        return
      }
    }
    // else
    data.saved = false
    localCards.forEach(i => {
      if (i._id === _id) return i.saved = false
    })

    saveSearchVideosInLS(localCards)
    const newCards = savedCards.filter(i => i._id !== _id)
    saveCardInLS(newCards)
    setIsSavedCard(false)
    if (router.pathname === '/favourites') return setCardsToRender(newCards)
    return
  }

  return (
    <li className={styles.card}>
      <div className={styles.card__overlay}>
        <a className={styles.card__link} href={url} target="_blank">
          { title }
        </a>
        <div onClick={handleSaveClick} className={styles.card__saveBtn}>{ isSavedCard ? 'Remove' : 'Save' }</div>
      </div>
      <div className={styles.card__preview}>
        <img className={styles.card__img} src={preview.medium} alt={title}/>
      </div>
    </li>
  );
}

export default Card;
