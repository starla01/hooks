//Libraries
import { useState }  from 'react';

//Components
import Logo from '../../components/Logo';

//Styles
import styles from './index.module.sass';

export default function Header({setListItems, history}){

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

  return <div className={styles.header}>
    <Logo width="100" />
    <div className={styles.containerSearch}>
      <input type="text" onChange={handleSearch} onKeyPress={handleSearch} placeholder="Buscar productos" className={styles.searchText} />
    </div>
  </div>
}
