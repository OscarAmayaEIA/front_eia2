import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Sidemenu from "../components/Sidemenu/sidemenu";
import Graph from "../components/Graph/Graph";
import RT_Graph from "../components/Real_time_Graph/RT_Graph";
import mqtt from "mqtt";
import React,{useState, useEffect} from "react";
import Card from "../components/Card/Card";
import Estructura_pagina from "../modules/estructura";

// var mqtt = require('mqtt')
var options = { protocolo: 'mqtts', 
                clientID: "frontend_1",
                username: 'ejemplo-control', 
                password: 'B69napsxhhC1pXlW'}

export default function Home({list_dots}) {
var [Sensor_data, setSensor_data] = useState(0);
const [data, setData] = useState([]);
useEffect(() => {
  var client = mqtt.connect('mqtts://ejemplo-control.cloud.shiftr.io', options);
  var cont = 0;
  
  client.subscribe("Edfico1/salon32B/Ventana1/lumens");
  client.on("message", function (topic, message) {
    cont++;
    const dot = {
      id: cont,
      value: parseFloat(message.toString())
    };
    setData((data)=>[...data, dot]);
    setSensor_data(parseFloat(message.toString()));

  });
},[]);

return (
  <Estructura_pagina>
    <Card value={Sensor_data} />
    <RT_Graph data={data} />
    {/* Otro contenido específico de la página Home */}
  </Estructura_pagina>
);
};
    


export const getServerSideProps = async () => {
  try {
    const apiResponse = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/dots/5/"
    );
    const list_dots = await apiResponse.json();
    return {
      props: {
        list_dots: list_dots,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        list_dots: [0, 0, 0],
      },
    };
  }
};
