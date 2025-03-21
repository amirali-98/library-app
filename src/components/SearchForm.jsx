import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

import styles from "./SearchForm.module.css";

export default function SearchForm({ setBooks, allBooks }) {
  const [search, setSearch] = useState("");

  const searchHandler = e => {
    e.preventDefault();
    if (search) {
      setBooks(
        allBooks.filter(b => b.title.toLowerCase().trim().includes(search))
      );
    } else {
      setBooks(allBooks);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">
        <MdOutlineSearch />
      </button>
    </form>
  );
}
