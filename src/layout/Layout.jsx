import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Library App</h1>
        <p>
          <span>Amirali</span> | React Tutorial
        </p>
      </header>
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Develop by Amirali | Check my{" "}
          <a href="https://github.com/amirali-98">Github</a> please
        </p>
      </footer>
    </>
  );
}
