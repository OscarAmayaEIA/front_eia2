import styles from "./Card.module.css";
import {FaUser} from "react-icons/fa";
import {IoIosSettings} from "react-icons/io";
import {CiTempHigh} from "react-icons/ci";
import Image from "next/image";
export default function Card({ value=0}) {
    return (
        <div className={styles.main}>
           <CiTempHigh className={styles.icon}/>
              <div className={styles.data}>{value}</div>
        </div>
    )
}
