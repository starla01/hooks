//Components
import Item from '../../components/Item';

//Styles
import styles from './index.module.sass';

export default function Items({listItems}){
  return <div className={styles.items}>
    {
      listItems && listItems.map((item, key) => {
        return <Item key={key} item={item} />
      })
    }
  </div>
}
