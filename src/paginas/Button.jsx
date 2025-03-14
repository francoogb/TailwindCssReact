import React from "react";

const Button = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col gap-8 p-6 max-w-3xl mx-auto">
        {/* Botón */}
        <div className="flex justify-center items-center min-h-[200px]">
          <button className="bg-gradient-to-r from-blue-950 to-blue-800 py-6 px-8 text-amber-100 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-0.5 transform transition-all duration-200 focus:ring-4 focus:ring-blue-500/50 focus:outline-none font-bold tracking-wide text-lg flex items-center justify-center gap-2 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Botón Tailwind
          </button>
        </div>
        
        {/* Descripción Didáctica */}
        <div className="p-6 rounded-lg shadow border bg-white text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-400">Botón Moderno con Tailwind CSS</h2>
          
          <h3 className="font-semibold text-lg mt-4 mb-2 text-blue-800 dark:text-blue-300">Características Principales</h3>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Estilo Visual</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Gradiente de color: Transición suave de azul oscuro (blue-950) a azul medio (blue-800)</li>
              <li>Texto: Color ámbar claro (amber-100) que contrasta con el fondo azul</li>
              <li>Sombra: Efecto de elevación mediante shadow-lg</li>
              <li>Bordes redondeados: Esquinas suavizadas con rounded-xl</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Interactividad</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Efecto hover: Sombra intensificada y desplazamiento suave hacia abajo</li>
              <li>Transiciones: Animación fluida con duration-200</li>
              <li>Efecto focus: Anillo azul alrededor al hacer focus</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Estructura</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Padding generoso: py-6 vertical y px-8 horizontal</li>
              <li>Tipografía: Texto en negrita con espaciado ampliado</li>
              <li>Icono: Flecha SVG integrada que refuerza la acción</li>
              <li>Disposición: Flex para alinear icono y texto con gap-2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;