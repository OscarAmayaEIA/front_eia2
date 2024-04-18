import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";

const Estructura_pagina = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header titulo={"Home"} />
      <div className={styles.content}>
        <Sidemenu />
        <div className={styles.graphContainer}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Estructura_pagina;