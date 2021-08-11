//Components
import Items from '../../components/Items';
//Styles
import styles from './index.module.sass';

export default function ListView({listItems}){
  return <div className={styles.listView}>
    <Items listItems={listItems} />
  </div>
}
