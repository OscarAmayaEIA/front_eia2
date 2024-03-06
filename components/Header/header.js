import Image from "next/image";
import styles from "./header.module.css";
import { FaUserAstronaut } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
export default function Header() {
  return (
    <div className={styles.header}>
        <FaGears className={styles.icon}/>
        <FaUserAstronaut className={styles.icon}/>
        
    </div>
  );
}