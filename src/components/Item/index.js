//Libraries
import { Link } from 'react-router-dom';

//CustomHooks
import useCurrency from '../../hooks/useCurrency';

//Styles
import styles from './index.module.sass';

export default function Item({ item }) {
  const { thumbnail, title, price, id } = item;
  const formatedPrice  = useCurrency(price);

  return <Link to={`/item/${id}`} className={styles.linkItem}>
    <div className={styles.item} >
      <div className={styles.figure}>
        <img src={thumbnail} alt="" height="100%" />
      </div>
      <div className={styles.content}>
        <div className={styles.price}>{formatedPrice}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  </Link>
}
