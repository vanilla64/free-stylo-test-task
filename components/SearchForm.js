import React, {useEffect, useState} from "react";
import styles from '../styles/SearchForm.module.sass'
import api from "../utils/Api";
import {removeSearchVideosFromLS} from "../utils/localData";

function SearchForm({ setData }) {
  const [value, setValue] = useState({});

  useEffect(() => {
    // console.log(value)
  }, [value])

  const handleChange = evt => {
    const { name, value } = evt.target
    setValue(prev => { return { ...prev, [name]: value  } })
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    removeSearchVideosFromLS()
    api.getChannelsId(value.channel)
      .then((res) => { res.channels.forEach(item => {
        if (item.display_name.toLowerCase() === value.channel.toLowerCase()) return setData(item)
        return
      }) })
      .catch((err) => { console.log(err) })
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className={styles.searchForm}>
      <input required={true} name="channel" className={styles.searchForm__input} type="text" placeholder="Enter channel"/>
      <button className={styles.searchForm__btn} type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
