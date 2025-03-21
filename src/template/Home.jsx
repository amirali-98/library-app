import { useState } from "react";

import BookCard from "../components/BookCard";
import FavoriteList from "../components/FavoriteList";

import styles from "./Home.module.css";

export default function Home({ books, setBooks }) {
  const [likedBooks, setLikedBooks] = useState([]);
  return (
    <div className={styles.home}>
      <ul
        className={styles.bookList}
        style={{ width: likedBooks.length ? "65%" : "100%" }}
      >
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            setLikedBooks={setLikedBooks}
            likedBooks={likedBooks}
          />
        ))}
      </ul>
      <FavoriteList likedBooks={likedBooks} />
    </div>
  );
}
