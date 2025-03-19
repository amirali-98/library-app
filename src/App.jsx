import SearchForm from "./components/SearchForm";
import Layout from "./layout/Layout";
import Home from "./template/Home";

export default function App() {
  return (
    <div className="app">
      <Layout>
        <SearchForm />
        <Home />
      </Layout>
    </div>
  );
}
