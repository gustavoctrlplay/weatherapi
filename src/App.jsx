import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tempo from "./Tempo";

function App() {
  const [count, setCount] = useState(0);
  const [cityName, setCityName] = useState('')
  const [weather, setWeather] = useState(null)

  async function buscarClima() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${'6fa075125c2a4a329ff707c1f429ddf0'}&units=metric&lang=pt`)
      const data = await response.json()

      console.log(data)

      setWeather({
        name: data.name,
        temperatura: data.main.temp,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      })
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <h1>Previsão do Tempo!</h1>
      <div>
        <input
          type="text"
          placeholder="Informe a cidade"
          onChange={(event) => setCityName(event.target.value)}
        />

        <button
          onClick={() => buscarClima()}
        >
          Pesquisar
        </button>

    {
      weather && (
        <Tempo tempo={weather}/>
      )
    }

      </div>
    </>
  );
}

export default App;
