import { useState } from "react";
import styles from "./OurStore.module.css";

export default function OurStore() {
  const [activeTab, setActiveTab] = useState(0);

  const stores = [
    {
      id: 0,
      city: "Київ",
      address: "вулиця Велика Васильківська, 72",
      phone: "+380 95 137 31 95",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.474643323086!2d30.51401307688081!3d50.43219468866384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef0651d2f83%3A0xc3af87c2b3e58b1!2z0LLRg9C7LiDQktC10LvQuNC60LAg0JLQsNGB0LjQu9GM0LrRltCy0YHRjNC60LAsIDcyLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1710000000000!5m2!1suk!2sua",
      reviews: [
        {
          id: "rev-kiev-1",
          name: "Анна",
          text: "Чудовий вибір! Дуже задоволена покупками.",
          rating: 5,
        },
        {
          id: "rev-kiev-2",
          name: "Катерина",
          text: "Магазин супер! Завжди стильні новинки.",
          rating: 5,
        },
      ],
    },
    {
      id: 1,
      city: "Запоріжжя",
      address: "проспект Соборний, 147",
      phone: "+380 95 137 31 95",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.78453412356!3d35.1234567890123!2d47.838800000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673752538171%3A0xb32c7bf697525e83!2z0L_RgNC-0YHQv9C10LrRgiDQodC-0LHQvtGA0L3QuNC5LCAxNDcsINCX0LDQv9C-0YDRltC20LbRjywg0JfQsNC_0L7RgNGW0LfRjNC60LAg0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1suk!2sua!4v1710000000000!5m2!1suk!2sua",
      reviews: [
        {
          id: "rev-zp-1",
          name: "Ольга",
          text: "Прекрасний сервіс та зручне розташування.",
          rating: 5,
        },
        { 
          id: "rev-zp-2",
          name: "Марія", 
          text: "Найкращий асортимент у місті!", 
          rating: 4 
        },
      ],
    },
  ];

  const currentStore = stores[activeTab];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наші магазини</h2>

      <div className={styles.buttons}>
        {stores.map((store, index) => (
          <button
            key={store.id}
            className={`${styles.tabBtn} ${activeTab === index ? styles.active : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {store.city}
          </button>
        ))}
      </div>

      <div className={styles.locationCard}>
        <div className={styles.info}>
          <p className={styles.address}>📍 {currentStore.address}</p>
          <a
            href={`tel:${currentStore.phone.replace(/\s/g, "")}`}
            className={styles.phone}
          >
            📞 {currentStore.phone}
          </a>
        </div>

        <div className={styles.mapWrapper}>
          {stores.map((store, index) => (
            <iframe
              key={store.id}
              src={store.mapSrc}
              className={`${styles.mapIframe} ${
                activeTab === index ? styles.activeMap : styles.hiddenMap
              }`}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Магазин у м. ${store.city}`}
            ></iframe>
          ))}
        </div>

        <div className={styles.reviewsSection}>
          <h3 className={styles.reviewsTitle}>Відгуки клієнтів</h3>
          <div className={styles.reviewsList}>
            {currentStore.reviews.map((review) => (
              <div key={review.id} className={styles.reviewItem}>
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewerName}>{review.name}</span>
                  <span className={styles.rating}>
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}