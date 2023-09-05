import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div id="home-container">
          <div>
            <h1 id="home-title">Selecione o Fuso Horário brasileiro que você quer verificar</h1>
          </div>
          <div id="home-button-box">
            <NavLink to="/fusos-brasileiros/fernando-noronha"><button className="home-button">Fernando de Noronha</button></NavLink>
            <NavLink to="/fusos-brasileiros/brasilia"><button className="home-button">Brasília</button></NavLink>
            <NavLink to="/fusos-brasileiros/amazonas"><button className="home-button">Amazonas</button></NavLink>
            <NavLink to="/fusos-brasileiros/acre"><button className="home-button">Acre</button></NavLink>
          </div>
        </div>
      );
}

export default Home