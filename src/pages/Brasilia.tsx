import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Brasilia() {
  const [time, setTime] = useState(
    moment.tz("America/Fortaleza").format("DD MM YYYY HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz("America/Fortaleza").format("DD MM YYYY HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="container">
      <NavLink to="/"><button id="back-button"><FiArrowLeft size={25} /></button></NavLink>
      <h1 id="titulo-fuso">Fuso de Brasília GMT-3</h1>
      <h2 id="data">{time.slice(0, 10)}</h2>
      <div id="relogio">
        <span id="hora">{time.slice(11, 13)}</span>
        <span id="minuto">{time.slice(14, 16)}</span>
        <span id="segundo">{time.slice(17, 19)}</span>
      </div>
    </div>
  );
}

export default Brasilia;
