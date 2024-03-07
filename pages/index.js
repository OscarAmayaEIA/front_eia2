import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";
import Graph from "../components/Graph/Graph";
import RT_Graph from "../components/Real_time_Graph/RT_Graph";
import mqtt from "mqtt";
import React,{useState, useEffect} from "react";

// var mqtt = require('mqtt')
var options = { protocolo: 'mqtts', 
                clientID: "frontend_1",
                username: 'ejemplo-control', 
                password: 'B69napsxhhC1pXlW'}

export default function Home({list_dots}) {

const [data, setData] = useState([]);

useEffect(() => {
  var client = mqtt.connect('mqtts://ejemplo-control.cloud.shiftr.io', options);
  client.subscribe("Edfico1/salon32B/Ventana1/lumens");
  client.on("message", function (topic, message) {

    const dot = {
      id: data.length,
      value: parseFloat(message.toString())
    };
    setData((data)=>[...data, dot]);
    console.log(data);

  });
},[]);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Sidemenu />
        <div className={styles.graphContainer}>

          <RT_Graph data={data}/>
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
