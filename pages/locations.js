import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/locations.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";
import ReactLoading from "react-loading";
import { FaPlusCircle } from "react-icons/fa";

export default function Locations({ list_locations, list_users }) {
  const [locations, setLocations] = useState(list_locations.locations);
  const [nameLocations, setNameLocations] = useState("");
  const [userId, setUserId] = useState("");
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState(list_users);
  
  const createLocation = async () => {
    setLoad(true);
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/location/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name_locations: nameLocations,
        user: userId,
      }),
    });
    if (response.status === 200) {
      setLoad(false);
      setNameLocations("");
      setUserId("");
      const updatedLocations = await getLocations();
      setLocations(updatedLocations);
    }
  };

  const getLocations = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/location/2/");
    const locationsData = await response.json();
    return locationsData.locations;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/");
      const usersData = await response.json();
      console.log(usersData);
      setUsers(usersData.users);
    };
    fetchUsers();
  }, []);

  return (
    <div className={styles.main}>
      <Header titulo={"Home"} />
      <div className={styles.content}>
        <Sidemenu />
        <div className={styles.pageContent}>
          <div className={styles.body_table}>
            <div className={styles.row_header} key={"idhd2"}>
              <div className={styles.cell_header}>ID</div>
              <div className={styles.cell_header}>User</div>
              <div className={styles.cell_header}>Name Locations</div>
              <div className={styles.cell_header}>Eliminar</div>
            </div>
            {locations.map((location) => (
              <div className={styles.row} key={location.id}>
                <div className={styles.cell}>{location.id}</div>
                <div className={styles.cell}>{location.user_id}</div>
                <div className={styles.cell}>{location.name_locations}</div>
                <div className={styles.cell}>Eliminar</div>
              </div>
            ))}
            <div className={styles.row} key={"idhd4"}>
              <div className={styles.cell}>Agregar</div>
              <div className={styles.cell}>
                <input
                  type="text"
                  value={userId}
                  onChange={(event) => setUserId(event.target.value)}
                />
              </div>
              <div className={styles.cell}>
                <input
                  type="text"
                  value={nameLocations}
                  onChange={(event) => setNameLocations(event.target.value)}
                />
              </div>
              <div className={styles.cell}>
                {load ? (
                  <ReactLoading type={"spin"} color={"black"} height={20} width={20} />
                ) : (
                  <FaPlusCircle className={styles.icon} onClick={createLocation} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const locationsResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "/location/2/");
  const listLocations = await locationsResponse.json();

  const usersResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/");
  const listUsers = await usersResponse.json();

  return {
    props: {
      list_locations: listLocations,
      list_users: listUsers.users,
    },
  };
};
