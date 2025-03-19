import SearchForm from "./components/SearchForm";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <div className="app">
      <Layout>
        <SearchForm />
      </Layout>
    </div>
  );
}
