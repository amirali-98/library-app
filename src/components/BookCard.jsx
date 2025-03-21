import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from "./BookCard.module.css";

export default function BookCard({ book, setLikedBooks, likedBooks }) {
  const [isLiked, setIsLiked] = useState(false);

  const likeBookHandler = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikedBooks(likedBooks => [...likedBooks, book]);
    } else {
      setIsLiked(false);
      setLikedBooks(likedBooks.filter(lb => lb.id !== book.id));
    }
  };

  return (
    <li className={styles.bookItem} key={book.id}>
      <img src={book.image} alt={book.title} />
      <div>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
        <div className={styles.metaInfo}>
          <span>{book.language}</span>
          <span>{book.pages} pages</span>
        </div>
      </div>
      <button className={styles.likeBtn} onClick={likeBookHandler}>
        <AiFillHeart
          style={{
            color: likedBooks.find(lb => lb.id === book.id) ? "red" : "",
          }}
        />
      </button>
    </li>
  );
}
