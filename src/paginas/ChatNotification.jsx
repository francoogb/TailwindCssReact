import React from "react";
import Bubble from "../components/Icons/Bubble";

const ChatNotification = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center border-b-2 border-gray-200 dark:border-gray-700 pb-4">
        Notificaciones con Tailwind CSS
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
        <div className="mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Utility-First CSS con Tailwind</h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind CSS es un framework que utiliza un enfoque <span className="font-semibold text-blue-600 dark:text-blue-400">utility-first</span>, donde cada clase tiene una única responsabilidad. Esto permite construir componentes personalizados sin escribir CSS.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border-l-4 border-indigo-500">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ventaja clave:</strong> Tailwind nos permite construir diseños personalizados sin salir del HTML y mantener consistencia en todo el proyecto.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Ejemplo de Notificación:</h3>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Componente en acción:</h4>
              <div className="flex justify-center p-6 bg-gray-50 dark:bg-gray-700 rounded-md">
                <div className="p-6 max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center gap-x-4">
                  <div className="shrink-0">
                    <Bubble className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                    <p className="text-slate-500 dark:text-slate-400">You have a new message!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Clases utilizadas:</h4>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded flex items-center">
                  <span className="w-32 font-mono text-sm text-indigo-600 dark:text-indigo-400">p-6</span>
                  <span className="text-gray-600 dark:text-gray-300">Padding en todos los lados (1.5rem)</span>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded flex items-center">
                  <span className="w-32 font-mono text-sm text-indigo-600 dark:text-indigo-400">max-w-sm</span>
                  <span className="text-gray-600 dark:text-gray-300">Ancho máximo (24rem)</span>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded flex items-center">
                  <span className="w-32 font-mono text-sm text-indigo-600 dark:text-indigo-400">rounded-xl</span>
                  <span className="text-gray-600 dark:text-gray-300">Border radius grande (0.75rem)</span>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded flex items-center">
                  <span className="w-32 font-mono text-sm text-indigo-600 dark:text-indigo-400">shadow-lg</span>
                  <span className="text-gray-600 dark:text-gray-300">Sombra grande</span>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded flex items-center">
                  <span className="w-32 font-mono text-sm text-indigo-600 dark:text-indigo-400">flex items-center</span>
                  <span className="text-gray-600 dark:text-gray-300">Flexbox con alineación centrada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Versión con modo oscuro:</h3>
          <div className="flex justify-center p-6 bg-gray-800 rounded-md">
            <div className="p-6 max-w-sm bg-gray-900 rounded-xl shadow-lg flex items-center gap-x-4">
              <div className="shrink-0">
                <Bubble className="text-indigo-400" />
              </div>
              <div>
                <div className="text-xl font-medium text-white">ChitChat</div>
                <p className="text-slate-400">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-sm">
            <p className="text-gray-700 dark:text-gray-300 mb-2">Código para el modo oscuro:</p>
            <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
{`<div className="p-6 max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg 
  flex items-center gap-x-4">
  <div className="shrink-0">
    <Bubble className="text-indigo-500 dark:text-indigo-400" />
  </div>
  <div>
    <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p className="text-slate-500 dark:text-slate-400">You have a new message!</p>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatNotification;