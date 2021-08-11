//Libraries
import { useState, useEffect }  from 'react';

//Components
import Logo from '../../components/Logo';

//Custom Hooks
import useSearch from '../../hooks/useSearch';
import useVoice from '../../hooks/useVoice';

//Styles
import styles from './index.module.sass';

export default function Header({setListItems, history}){
  const [strText, setStrText] = useState("");
  const { phraseState } = useVoice("");
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

  return <div className={styles.header}>
    <Logo width="100" />
    <div className={styles.containerSearch}>
      <input type="text" onChange={handleSearch} onKeyPress={handleSearch} placeholder="Buscar productos" className={styles.searchText} />
    </div>
  </div>
}
