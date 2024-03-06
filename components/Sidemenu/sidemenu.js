import Image from "next/image";
import styles from "./sidemenu.module.css";
import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { MdOutlineLocationCity } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GiHistogram } from "react-icons/gi";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.sidemenu}>
        <FaHome className={styles.icon} onClick={() => router.push({pathname:"/"})}/>
        <MdOutlineLocationCity className={styles.icon} onClick={() => router.push({pathname:"/locations"})}/>
        <HiOutlineDocumentReport className={styles.icon}/>
        <GiHistogram className={styles.icon}/>   
        {/* Tarea : Reemplazar con los iconos correctos */}
    </div>
  );
}