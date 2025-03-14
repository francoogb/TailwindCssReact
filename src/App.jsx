import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { UnknownUser } from "./paginas/UnknownUser";
import { paises } from "./Paises/paises.js";
import WelcomeUser from "./paginas/WelcomeUser .jsx";
import { UseStateHoook } from "./paginas/UseStateHoook.jsx";
import { CounterContext } from "./context/CounterContext.jsx";
import { useContext } from "react"; // Asegúrate de tener esta línea
import useStore from "./store/useStore.JS";
import { UserCard } from "./paginas/UserCard.jsx";
import { Button } from "./components/Button/Button.jsx";

function App() {
  let Userlogueado = true;
  const { counter, increment, decrement } = useStore();

  // Información que pasaremos al UserCard
  const user = {
    name: "Franco González",
    image: "https://cdn-icons-png.flaticon.com/512/147/147144.png", // Ejemplo de avatar de Flaticon
  };

  const url = {
    site: "https://www.mi-sitio.com",
    twitch: "https://www.twitch.com/frxngb",
    twitter: "https://www.twitter.com/frxngb",
  };

  return (
    <>
      {Userlogueado ? (
        <WelcomeUser nombre="Franco" user="Frxngb">
          Este es un contenido pasado como children.
        </WelcomeUser>
      ) : (
        <UnknownUser />
      )}
      <UseStateHoook />
      <br />
      <h3>El valor es {counter}</h3>
      <button onClick={increment}>Incrementar</button>
      <span style={{ margin: "0 10px" }}></span>{" "}
      {/* Esto añade un margen horizontal entre los botones */}
      <button onClick={decrement}>Decrementar</button>
      {/* Aquí es donde usamos el componente UserCard correctamente */}
      <UserCard user={user} url={url}>
        <p>Este es un contenido pasado como children en UserCard.</p>
      </UserCard>
      <Button />
      

        



    </>
  );
}

export default App;
