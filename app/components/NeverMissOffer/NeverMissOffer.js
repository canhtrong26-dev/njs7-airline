'use client';
import { useState, useEffect } from 'react';
import styles from './NeverMissOffer.module.scss';

export default function NeverMissOffer() {
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    agree: false,
  });

  const [csrfToken, setCsrfToken] = useState('');

  // Lấy CSRF token khi vào trang
  useEffect(() => {
    fetch('/api/subscribe')
      .then((res) => {
        const token = res.headers.get('x-csrf-token');
        setCsrfToken(token);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!csrfToken) {
      alert('Đang tải, vui lòng đợi...');
      return;
    }

    const res = await fetch('/api/subscribe', {
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
    <section className={styles.neverMiss}>
      <div className={styles.content}>
        <h2 className={styles.title}>Never Miss An Offer</h2>
        <p className={styles.subtitle}>
          Subscribe and be the first to receive our<br />
          exclusive offers.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email Adress"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="city"
              placeholder="Prefferd City of Dparture"
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>
              I would like to get offers and new from Air Algeria. I have read and 
              understood the <a href="#">Privacy Notice</a>.
            </span>
          </label>

          <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
        </form>
      </div>
    </section>
  );
}