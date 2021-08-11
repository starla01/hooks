//Components
import Items from '../../components/Items';
import ProductNotFound from '../../components/ProductNotFound';
//Styles
import styles from './index.module.sass';

export default function ListView({listItems}){
  return <div className={styles.listView}>
    {
      listItems && listItems.length > 0 && <Items listItems={listItems} /> ||  <ProductNotFound />
    }
  </div>
}
