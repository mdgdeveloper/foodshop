import styles from '../styles/FeaturedImg.module.css';
import Image from 'next/image';

const FeaturedImg = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.topHeader}>Hot & Spicy</div>
                <div className={styles.header}>Pizza</div>
                <div className={styles.bigLine}></div>
                <div className={styles.offer}>50% off</div>
                <div className={styles.smallLine}></div>
                <div className={styles.order}>order now</div>
                <div className={styles.smallLine}></div>
                <div className={styles.shopName}>mdg dev shop</div>

            </div>
            <div className={styles.image}>
                <Image src="/img/pizzaFeat.png" alt="" layout="fill" />
            </div>
        </div>
    )
}

export default FeaturedImg
