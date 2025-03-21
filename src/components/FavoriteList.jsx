import styles from "./FavoriteList.module.css";

export default function FavoriteList({ likedBooks }) {
  return (
    <div
      className={styles.favoriteList}
      style={{ width: likedBooks.length ? "30%" : "0" }}
    >
      <h3>Favorite</h3>
      <ul>
        {!!likedBooks.length && (
          <>
            {likedBooks.map(lb => (
              <li key={lb.id}>
                <img src={lb.image} alt={lb.title} />
                <p>{lb.title}</p>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
