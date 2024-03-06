import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";
export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Sidemenu />
      <div className={styles.title}>
        Home</div>
    </div>
  );
}
