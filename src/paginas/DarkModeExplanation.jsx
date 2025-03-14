import React from 'react';

const DarkModeExplanation = () => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Implementación del Modo Oscuro con Tailwind CSS</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-400">Funcionamiento Principal</h3>
          <p className="text-gray-700 dark:text-gray-300">
            El componente <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">ModoOscuro</code> aplica 
            la clase <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">dark</code> al 
            elemento <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">html</code> raíz, activando todas las variantes 
            <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">dark:</code> en toda la aplicación.
          </p>
        </div>
        
        <div className="p-4 rounded-md bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400">
          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Acerca del Modo Oscuro en Tailwind</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Tailwind incluye una variante <code className="bg-blue-100 dark:bg-blue-800/60 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">dark:</code> que permite 
            aplicar estilos diferentes cuando el modo oscuro está activo. Por defecto, esta variante utiliza 
            <code className="bg-blue-100 dark:bg-blue-800/60 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">prefers-color-scheme</code>, pero puede 
            configurarse para utilizar selectores CSS personalizados.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-700 flex-1">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Inicialización Inteligente</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Verifica preferencia guardada en <span className="font-semibold">localStorage</span></li>
              <li>Detecta preferencia del sistema con <span className="font-semibold">prefers-color-scheme</span></li>
              <li>Restaura automáticamente el tema preferido del usuario</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-700 flex-1">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Implementación React</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Utiliza <span className="font-semibold">useState</span> para gestionar el estado</li>
              <li>Sincroniza cambios con <span className="font-semibold">useEffect</span></li>
              <li>Maneja la persistencia del tema en localStorage</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-400">Implementación del Toggle</h3>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-3">Tu componente implementa el toggle de modo oscuro con este código JavaScript:</p>
            
            <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
            {`document.documentElement.classList.toggle(
  "dark",
  isDarkMode
);

// Guardar preferencia
if (isDarkMode) {
  localStorage.theme = "dark";
} else {
  localStorage.theme = "light";
}`}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-400">Uso en Componentes</h3>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-3">Para utilizar el modo oscuro en tus componentes, simplemente añade variantes <code className="bg-gray-100 dark:bg-gray-600 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">dark:</code> a tus clases Tailwind:</p>
            
            <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
              &lt;div className="bg-white <span className="text-purple-600 dark:text-purple-400">dark:bg-gray-800</span> text-black <span className="text-purple-600 dark:text-purple-400">dark:text-white</span>"&gt;<br/>
              &nbsp;&nbsp;Contenido adaptable al tema<br/>
              &lt;/div&gt;
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md border-l-4 border-blue-500 dark:border-blue-400">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">Configuración de Tailwind</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Tu configuración de Tailwind debe tener <code className="bg-blue-100 dark:bg-blue-800/60 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">darkMode: 'class'</code> para que funcione con este sistema basado en clases.
            </p>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-md border-l-4 border-amber-500 dark:border-amber-400">
            <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-1">Alternativa con Atributos</h4>
            <p className="text-gray-700 dark:text-gray-300">
              También se puede usar <code className="bg-amber-100 dark:bg-amber-800/60 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">data-theme="dark"</code> con la configuración <code className="bg-amber-100 dark:bg-amber-800/60 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono">@custom-variant dark</code>.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md">
          <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Ejemplo Visual de Uso</h4>
          <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-4 ring-1 ring-gray-900/5 shadow-md">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                <svg className="h-6 w-6 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-white mt-3 text-base font-medium tracking-tight">Ejemplo de Componente</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Este es un ejemplo de componente que se adapta automáticamente entre modo claro y oscuro gracias a las clases dark: de Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeExplanation;