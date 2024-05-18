import styles from "./page.module.css";

import { Chat } from "@repo/core";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Chat />
    </main>
  );
}
