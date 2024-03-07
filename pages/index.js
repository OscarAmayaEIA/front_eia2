import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";
import Graph from "../components/Graph/Graph";

export default function Home({list_dots}) {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Sidemenu />
        <div className={styles.graphContainer}>
          <Graph data={list_dots?.dots}/>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const apiresponse = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/dots/5/"
  );
  const list_dots = await apiresponse.json();
  return {
    props: {
      list_dots,
    },
  };
};
