// Libraries
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

//CustomHooks
import useSearch from '../../hooks/useSearch';
import useVoice from '../../hooks/useVoice';

//Styles
import styles from './index.module.sass';

export default function Search({setListItems}){
  const history = useHistory();
  const { phraseState } = useVoice("");
  const [strText, setStrText] = useState("");
  useSearch({strText, setListItems, history});

  function handleSearch(e){
    setStrText(e.target.value)
  }

  useEffect(() => {
    if(phraseState && phraseState.length > 0){
      const phrase = phraseState.replace("Encuantra ", "").replace("Buscar ", "").replace("Busca ", "");
      setStrText(phrase);
    }
  }, [phraseState])

  // if(phraseState && phraseState.length && phraseState.indexOf("Busca") > -1){
  //   const phrase = phraseState.replace("Busca ", "");
  //   useSearch({phrase, setListItems, history});
  // }

  return <div className={styles.search}>
    <input onChange={handleSearch} onKeyPress={handleSearch} type="text" placeholder="Buscar productos" className={styles.searchText} />
    <button />
  </div>
}
