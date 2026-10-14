import Image from 'next/image';
import styles from './SpecialOffers.module.scss';

export default function SpecialOffers() {
  return (
    <section className={styles.specialOffers}>
      <h2 className={styles.title}>Special Offers</h2>
      <div className={styles.underline}></div>

      <div className={styles.grid}>
       
        <div className={styles.bigCard}>
          <div className={styles.bigImage}>
            <Image src="/images/f78a418eff5e75b9a32f417dc4f188f148dd7435.jpg" alt="Omrah" width={500} height={500} />
          </div>
          <div className={styles.bigInfo}>
            <p className={styles.country}>SAUDI ARABIA</p>
            <h3 className={styles.city}>Omrah</h3>
            <p className={styles.description}>
              Book economy class - return until 15 Jan 23
            </p>
            <p className={styles.price}>
              from <strong>DZD 64.000</strong>
            </p>
          </div>
        </div>

       
        <div className={styles.smallCards}>
        
          <div className={styles.smallCard}>
            <div className={styles.smallImage}>
              <Image src="/images/40865fc149e856479b0bb320f9cc36626215feb5.jpg" alt="Dubai" width={200} height={160} />
            </div>
            <div className={styles.smallInfo}>
              <p className={styles.country}>UNITED ARAB EMIRATES</p>
              <h3 className={styles.city}>Dubai</h3>
              <p className={styles.description}>
                Book economy class - return until 15 Jan 23
              </p>
              <p className={styles.price}>
                from <strong>DZD 82.000</strong>
              </p>
            </div>
          </div>

         
          <div className={styles.smallCard}>
            <div className={styles.smallImage}>
              <Image src="/images/40865fc149e856479b0bb320f9cc36626215feb5.jpg" alt="Paris" width={200} height={160} />
            </div>
            <div className={styles.smallInfo}>
              <p className={styles.country}>FRANCE</p>
              <h3 className={styles.city}>Paris</h3>
              <p className={styles.description}>
                Book economy class - return until 15 Jan 23
              </p>
              <p className={styles.price}>
                from <strong>DZD 30.790</strong>
              </p>
            </div>
          </div>

         
          <div className={styles.smallCard}>
            <div className={styles.smallImage}>
              <Image src="/images/6814373c69a3be91a011f1b6b3c0b4d0a48073d0.jpg" alt="Bangkok" width={200} height={160} />
            </div>
            <div className={styles.smallInfo}>
              <p className={styles.country}>THAILAND</p>
              <h3 className={styles.city}>Bangkok</h3>
              <p className={styles.description}>
                Book economy class - return until 15 Jan 23
              </p>
              <p className={styles.price}>
                from <strong>DZD 55.000</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}