import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

import styles from "./SearchForm.module.css";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  const searchHandler = e => {
    e.preventDefault();
    if (search) {
      alert(search);
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
