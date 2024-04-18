import Image from "next/image";
import styles from "./sidemenu.module.css";
import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { MdOutlineLocationCity } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GiHistogram } from "react-icons/gi";
import { useRouter } from "next/router";

import { useState } from 'react';

const Sidemenu = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div
      className={`${styles.sidemenu} ${expanded ? styles.expanded : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.icon} onClick={() => handleNavigation("/")}>
        <FaHome />
        {expanded ? <span className={styles.iconText}>Home</span> : null}
      </div>
      <div className={styles.icon} onClick={() => handleNavigation("/locations")}>
        <MdOutlineLocationCity />
        {expanded ? <span className={styles.iconText}>Locations</span> : null}
      </div>
      <div className={styles.icon} onClick={() => handleNavigation("/reports")}>
        <HiOutlineDocumentReport />
        {expanded ? <span className={styles.iconText}>Reports</span> : null}
      </div>
      <div className={styles.icon} onClick={() => handleNavigation("/histogram")}>
        <GiHistogram />
        {expanded ? <span className={styles.iconText}>Histogram</span> : null}
      </div>
    </div>
  );
};

export default Sidemenu;


