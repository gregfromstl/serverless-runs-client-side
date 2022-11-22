import Image from "next/image";
import Button from "../components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button />
      </main>
    </div>
  );
}
