//Libraries
import { Link } from 'react-router-dom';

//Styles
import styles from './index.module.sass';

export default function Item({ item }) {

  function formatPrice(price) {
    return (price).toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
    });
  }

  const { thumbnail, title, price, id } = item;
  return <Link to={`/item/${id}`} className={styles.linkItem}>
    <div className={styles.item} >
      <div className={styles.figure}>
        <img src={thumbnail} alt="" height="100%" />
      </div>
      <div className={styles.content}>
        <div className={styles.price}>{formatPrice(price)}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  </Link>
}
