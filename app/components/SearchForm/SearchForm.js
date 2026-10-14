'use client';
import { useState, useEffect } from 'react';
import styles from './SearchForm.module.scss';

export default function SearchForm() {
  const [formData, setFormData] = useState({
    departure: 'Algiers (ALG)',
    arrival: 'Select Country / City',
    date: 'Select departure date',
    class: 'Select class',
    passengers: '01 Passengers',
  });

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/search')
      .then((res) => {
        const token = res.headers.get('x-csrf-token');
        setCsrfToken(token);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!csrfToken) {
      alert('Đang tải, vui lòng đợi...');
      return;
    }

    const res = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>DEPARTURE AIRPORT</label>
        <div className={styles.cityName}>Algiers (ALG)</div>
        <div className={styles.airportDesc}>Houari Boumediene Airport - ALGERIA</div>
      </div>

      <div className={styles.swapWrapper}>
        <button type="button" className={styles.swapBtn}>⇅</button>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>ARRIVAL AIRPORT</label>
        <div className={styles.cityPlaceholder}>Select Country / City</div>
        <div className={styles.airportDesc}>Airport</div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.selectRow}>
        <span className={styles.icon}>📅</span>
        <span className={styles.selectText}>Select departure date</span>
        <span className={styles.arrow}>▾</span>
      </div>

      <div className={styles.selectRow}>
        <span className={styles.icon}>💺</span>
        <span className={styles.selectText}>Select class</span>
        <span className={styles.arrow}>▾</span>
      </div>

      <div className={styles.selectRow}>
        <span className={styles.icon}>👤</span>
        <span className={styles.selectText}>01 Passengers</span>
        <span className={styles.arrow}>▾</span>
      </div>

      <div className={styles.divider}></div>

      <button type="submit" className={styles.submitBtn}>Search Flights</button>
    </form>
  );
}