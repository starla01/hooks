//Libraries
import { Link } from "react-router-dom";

import styles from './index.module.sass';

export default function Logo({width}){
  return <div className={styles.logo}>
    <Link to="/">
      <img alt="Mercado Libre" src="/images/logoML.jpg" width={width} />
    </Link>
  </div>
}
