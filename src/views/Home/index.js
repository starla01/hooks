//Components
import Logo from '../../components/Logo';
import Search from '../../components/Search';

//Styles
import styles from './index.module.sass';

export default function Home({setListItems}){
  return <div className={styles.home}>
    <Logo width="200" />
    <Search setListItems={setListItems} />
  </div>
}
