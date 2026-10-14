import styles from './Hero.module.scss';
import SearchForm from '../SearchForm/SearchForm';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>More Than Just A Trip</h1>
        <p className={styles.subtitle}>
          Air Algérie is committed to a continuous<br />
          improvement of provided services quality.
        </p>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>+7M</div>
            <div className={styles.statInfo}>
              <h3>Passengers</h3>
              <p>More than 5 million passengers transported in 2022.</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>+44</div>
            <div className={styles.statInfo}>
              <h3>Destinations</h3>
              <p>Four continents, with 44 international routes and 35 domestic ones.</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>+56</div>
            <div className={styles.statInfo}>
              <h3>Unit</h3>
              <p>A fleet of 56 aircraft meeting international safety standards.</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.formWrapper}>
        <SearchForm />
      </div>
    </section>
  );
}