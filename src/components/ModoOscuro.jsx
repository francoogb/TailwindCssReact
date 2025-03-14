import React, { useState, useEffect } from 'react';

const ModoOscuro = () => {
  // Estado local para controlar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar preferencia guardada o preferencia del sistema
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (savedTheme === null && prefersDark);
    }
    return false;
  });

  // Efecto para aplicar la clase dark al elemento html y guardar preferencia
  useEffect(() => {
    // Aplicar clase dark al cargar el componente
    document.documentElement.classList.toggle(
      "dark",
      isDarkMode
    );
    
    // Guardar preferencia
    if (isDarkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  // Función para alternar entre modos
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      onClick={toggleDarkMode}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ModoOscuro;