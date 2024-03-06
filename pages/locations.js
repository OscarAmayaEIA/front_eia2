import Image from "next/image";
import React,{useState} from "react";
import styles from "../styles/locations.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";
import ReactLoading from 'react-loading';
import { FaPlusCircle } from "react-icons/fa";
export default function Locations({list_locations}) {
  console.log(list_locations);
  const [location , setLocation] = useState(list_locations.locations);
  const [name_locations, setName_Locations] = useState('');
  const [user_id, setUser_id] = useState('');
  const [load , setLoad] = useState(false);
  const create_location = async () => {
    setLoad(true);
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/location/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name_locations: name_locations,
        user: user_id,}),
      });
    if (response.status === 200) {
      setLoad(false);
      setName_Locations("");
      setUser_id("");
      const list_locations = await get_locations();
      setLocation(list_locations.locations);
      }
    }

  const get_locations = async () => {
    const apiresponse = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/location/2/"
    );
    const list_locations = await apiresponse.json();
    return list_locations;
}

  return (
    <div className={styles.main}>
      <Header />
      <Sidemenu />
      <div className={styles.body_table}>
        <div className={styles.row_header}  key={"idhd2"}>
          <div className={styles.cell_header}>ID</div>
          <div className={styles.cell_header}>User</div>
          <div className={styles.cell_header}>Name locations</div>
          <div className={styles.cell_header}>Eliminar</div>
        </div>
        {location.map((location) => {
          return (
            <div className={styles.row} key={"idhd3"}>
              <div className={styles.cell}>{location.id}</div>
              <div className={styles.cell}>{location.user_id}</div>
              <div className={styles.cell}>{location.name_locations}</div>
              <div className={styles.cell}>Eliminar</div>
            </div>
          );
        })}
        <div className={styles.row} key={"idhd4"}>
          <div className={styles.cell}>Agregar</div>
          <div className={styles.cell}>
            <input type="text" value={user_id} onChange={(event)=> setUser_id(event.target.value)}  /> 
            </div>
          <div className={styles.cell}>
            <input type="text" value={name_locations} onChange={(event)=> setName_Locations(event.target.value)}  /> 
            </div>
          <div className={styles.cell}>
          {load ? (
              <ReactLoading
                type={"spin"}
                color={"black"}
                height={20}
                width={20}
              />
            ) : (
              <FaPlusCircle className={styles.icon}  onClick={()=>create_location()}/>
            )}
          
          </div>
        </div>
      </div>
    </div>
  );

};


export const getServerSideProps = async () => {
  const apiresponse = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/location/2/"
  );
  const list_locations = await apiresponse.json();
  return {
    props: {
      list_locations,
    },
  };
};