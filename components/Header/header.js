import Image from "next/image";
import styles from "./header.module.css";
import { FaUserAstronaut } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

export default function Header({titulo}) {
  return (
    <div className={styles.header}>
      <div className={styles.title_principal}>
        {/* Aquí puedes ingresar el título de la página */}
        <h1>{titulo}</h1>
      </div>
      <div className={styles.icons}>
        {/* Icono de configuraciones */}
        <FaGears className={styles.icon} />
        {/* Icono de usuario */}
        <FaUserAstronaut className={styles.icon} />
      </div>
    </div>
  );
}


