import { useState } from "react";

import { books as allBooks } from "../constants/mockData";

import BookCard from "../components/BookCard";

import styles from "./Home.module.css";

export default function Home() {
  const [books, setBooks] = useState(allBooks);
  const [likedBooks, setLikedBooks] = useState([]);
  return (
    <div className={styles.home}>
      <ul>
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            setLikedBooks={setLikedBooks}
            likedBooks={likedBooks}
          />
        ))}
      </ul>
      <div>
        {likedBooks.map(lb => (
          <p key={lb.id}>{lb.title}</p>
        ))}
      </div>
    </div>
  );
}
