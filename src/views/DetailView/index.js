// Librerias
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Estilos
import styles from './index.module.sass';

export default function DetailView() {
  const [product, setProduct] = useState({});
  const { condition, picture, price, title } = product;
  let { id } = useParams();

  function formatPrice(price){
    return (price).toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
    });
  }

  useEffect(() => {
    const uri = `https://api.mercadolibre.com/items?ids=${id}`;
    return fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res[0]?.body;
        const {
          id,
          title,
          pictures,
          condition,
          shipping,
          price,
          currency_id,
        } = data;
        const picture = pictures[0]?.url;
        setProduct( {
          id,
          title,
          state_name: '',
          price: {
            currency: currency_id,
            amount: price,
            decimals: formatPrice(price),
          },
          picture,
          condition,
          free_shipping: shipping?.free_shipping,
        });
    });
  }, [id]);

  const conditions = (condition === 'new' && 'Nuevo') || 'Usado';
  const { amount } = price || {};

  return (
    <div className={styles.containerDetail}>
      <div className={styles.detail}>
        <div className={styles.mainDetail}>
          <div className={styles.picture}>
            <img src={picture} alt={title} loading='lazy' />
          </div>
          {condition && (
            <div className={styles.info}>
              <div className={styles.contentInfo}>
                <p className={styles.condition}>{conditions}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.amount}>${amount}</p>
                <div className={styles.addToCart}>Comprar</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
