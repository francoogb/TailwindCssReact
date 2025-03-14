import React, { useEffect } from "react";
import useStore from "../store/useStore.JS";
import UseStateHook from "./UseStateHoook";
import WelcomeUser from "./WelcomeUser ";
import { UserCard } from "./UserCard";
import ChatNotification from "./ChatNotification";
import Button from "./Button";
import ModoOscuro from "../components/ModoOscuro";
import DarkModeExplanation from "./DarkModeExplanation";

const Home = () => {
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
    <div className="container mx-auto px-4 py-12 max-w-4xl bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Primera sección - Children en React */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center border-b-2 border-gray-200 pb-4">
          Children en React
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              ¿Qué son los children en React?
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Los{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                children
              </span>{" "}
              son un concepto fundamental en React que permite la composición de
              componentes. Representan el contenido que se coloca entre las
              etiquetas de apertura y cierre de un componente.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              En React, los children se pasan automáticamente como una prop
              especial llamada{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-pink-600 dark:text-pink-400">
                children
              </code>
              . Esto permite crear componentes más flexibles y reutilizables.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border-l-4 border-yellow-500">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Los children permiten implementar el
                patrón de composición, uno de los patrones más poderosos de
                React para crear interfaces de usuario flexibles.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Ejemplo práctico:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              Observa cómo pasamos contenido al componente WelcomeUser:
            </p>

            {Userlogueado ? (
              <WelcomeUser nombre="Franco" user="Frxngb">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 border-l-4 border-blue-500">
                  Este es un contenido pasado como children.
                </div>
              </WelcomeUser>
            ) : (
              <UnknownUser />
            )}

            <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Código del componente WelcomeUser:
              </p>
              <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`function WelcomeUser({ nombre, user, children }) {
  return (
    <div>
      <h2>¡Bienvenido {nombre}!</h2>
      <p>Usuario: {user}</p>
      {children} {/* Aquí se renderiza el contenido pasado entre las etiquetas */}
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          <div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Beneficios de usar children:
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Mejor composición de componentes</li>
              <li>Mayor flexibilidad y reutilización</li>
              <li>
                Separación clara entre la estructura del componente y su
                contenido
              </li>
              <li>
                Facilita la creación de componentes contenedores (wrappers)
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-center">
            <div className="flex space-x-6">
              <button
                onClick={decrement}
                className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium"
              >
                Decrementar
              </button>
              <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-md font-bold text-gray-800 dark:text-gray-200">
                Contador: {counter}
              </div>
              <button
                onClick={increment}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
              >
                Incrementar
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Separador visual */}
      <div className="w-1/2 h-1 bg-gray-200 mx-auto my-12 rounded-full"></div>
      {/* Segunda sección - UseState en React */}
      <section className="mt-16 mb-16">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center border-b-2 border-gray-200 pb-4">
          UseState en React
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              ¿Qué es useState en React?
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                useState
              </span>{" "}
              es un Hook fundamental de React que permite añadir estado a
              componentes funcionales. Antes de los Hooks, solo los componentes
              de clase podían tener estado.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cuando llamamos a{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-pink-600 dark:text-pink-400">
                useState()
              </code>
              , React nos devuelve un array con dos elementos:
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border-l-4 border-green-500">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  1. Variable de estado
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Contiene el valor actual del estado
                </p>
              </div>
              <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border-l-4 border-blue-500">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  2. Función actualizadora
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Permite cambiar el valor del estado
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border-l-4 border-yellow-500">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Importante:</strong> Cuando la función actualizadora es
                llamada, React re-renderiza el componente con el nuevo valor de
                estado.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Sintaxis básica:
            </h3>
            <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto mb-4">
              {`const [count, setCount] = useState(0);

// count: variable que contiene el estado actual
// setCount: función para actualizar el estado
// 0: valor inicial del estado`}
            </pre>

            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Ejemplo práctico:
            </h3>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <UseStateHook />
            </div>

            <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Código de implementación típica:
              </p>
              <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Reglas importantes al usar useState:
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Siempre debe llamarse en el nivel superior del componente</li>
              <li>
                No puede estar dentro de condicionales, bucles o funciones
                anidadas
              </li>
              <li>
                Solo debe usarse en componentes de React o Hooks personalizados
              </li>
              <li>El valor inicial solo se usa en el primer renderizado</li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Casos de uso comunes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Formularios
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Gestionar inputs y validaciones
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Toggles
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Mostrar/ocultar elementos
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Contadores
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Incrementar/decrementar valores
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Listas
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Añadir/eliminar/modificar items
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera sección - Children en Card */}
      <section className="my-16">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center border-b-2 border-gray-200 pb-4">
          Children en Card
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Componentes Card con Children
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Los componentes tipo{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Card
              </span>{" "}
              son un excelente ejemplo de cómo aprovechar el patrón de children
              en React. Esto permite crear tarjetas con estructuras visuales
              consistentes, pero con contenido flexible.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              El componente Card define la estructura, estilos y comportamiento,
              mientras que el contenido específico se pasa como children,
              manteniendo así la separación de responsabilidades.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border-l-4 border-purple-500">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Patrón común:</strong> En interfaces modernas, las
                tarjetas son un elemento fundamental de diseño. Usando children,
                podemos tener un único componente Card reutilizable para
                múltiples propósitos.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* Aquí estaba el error de cierre */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200">
          <UserCard user={user} url={url}>
            <p className="text-gray-600 dark:text-gray-300">
              Este es un contenido pasado como children en UserCard.
            </p>
          </UserCard>
        </div>
      </section>

      <ChatNotification />
      <Button />
      <ModoOscuro />
      <DarkModeExplanation/>
    </div>
  );
};

export default Home;
