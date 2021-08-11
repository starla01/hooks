// Libraries
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import styles from './index.module.sass';

export default function Search({setListItems}){
  const history = useHistory();
  const [strText, setStrText] = useState("");

  function handleSearch(e){
    setStrText(e.target.value)
    const key = e.keyCode || e.which;
    if (key === 13) {
      handleListItems()
    }
  }

  function handleListItems(){
    const uri = `https://api.mercadolibre.com/sites/MLA/search?q=:${strText}&limit=12`;
    fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setListItems(res.results);
        res.results && history.push(`/items?search=${strText}`);
      })
  }
  return <div className={styles.search}>
    <input onChange={handleSearch} onKeyPress={handleSearch} type="text" placeholder="Buscar productos" className={styles.searchText} />
    <button />
  </div>
}
