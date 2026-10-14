'use client';

import Image from 'next/image';

import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <header className={styles.header}>
     
      {showNotice && (
        <div className={styles.notice}>
          <div className={styles.noticeContent}>
            <span className={styles.noticeIcon}>ⓘ</span>
            <span><strong>Important:</strong> COVID-19 update & travel requirements</span>
          </div>
          <button className={styles.closeBtn} onClick={() => setShowNotice(false)}>✕</button>
        </div>
      )}

     
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/94fe41419e2bba58092eb56e767bcadb8efd2737.png"
            alt="Air Algérie"
            width={100}
            height={50}
            className={styles.logoImg}
            priority={true}
          />
        </div>

        <ul className={styles.menu}>
          <li className={styles.active}>Home</li>
          <li>Discover</li>
          <li>Plan your trip</li>
          <li>Travel experience</li>
          <li>Air Algerie Plus</li>
        </ul>

        <div className={styles.actions}>
          <span className={styles.search}>🔍</span>
          <span className={styles.divider}>|</span>
          <span className={styles.lang}>🌐 English ▾</span>
          <button className={styles.loginBtn}>
            <span>↪</span> Log in
          </button>
        </div>
      </nav>
    </header>
  );
}