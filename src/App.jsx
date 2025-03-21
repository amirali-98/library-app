import { useState } from "react";

import SearchForm from "./components/SearchForm";
import Layout from "./layout/Layout";
import Home from "./template/Home";

import { books as allBooks } from "./constants/mockData";

export default function App() {
  document.title = "Library App";
  const [books, setBooks] = useState(allBooks);
  return (
    <div className="app">
      <Layout>
        <SearchForm allBooks={allBooks} setBooks={setBooks} />
        <Home books={books} setBooks={setBooks} />
      </Layout>
    </div>
  );
}
