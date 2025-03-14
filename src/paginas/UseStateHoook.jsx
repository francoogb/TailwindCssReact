import React, { useState } from 'react';

const UseStateHook = () => {
    const [channel, setChannel] = useState(1); // Estado para el canal actual
    const [inputValue, setInputValue] = useState(''); // Estado para el valor del input

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Captura el valor del input
    };

    const handleCambiar = () => {
        // Verifica si el valor ingresado es un número válido antes de cambiar el canal
        const numeroCanal = parseInt(inputValue, 10);
        if (!isNaN(numeroCanal)) {
            setChannel(numeroCanal); // Cambia el canal con el número ingresado
            setInputValue(''); // Limpia el input después de cambiar
        } else {
            alert('Por favor, ingresa un número válido');
        }
    };

    // Función para ir al siguiente canal
    const handleNextChannel = () => {
        setChannel((channel) => channel + 1);
    };

    // Función para ir al canal anterior
    const handlePreviousChannel = () => {
        setChannel((channel) => (channel > 1 ? channel - 1 : channel)); // No permite canales negativos
    };

    return (
        <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg max-w-md mx-auto border border-gray-200">
            <div className="w-full bg-black rounded-t-lg p-2 text-center">
                <h1 className="text-2xl font-bold text-white">Televisión</h1>
            </div>
            
            <div className="w-full bg-gray-800 p-6 flex items-center justify-center">
                <div className="bg-black rounded-lg p-8 w-full text-center border-4 border-gray-700">
                    <h2 className="text-4xl font-bold text-green-500">Canal {channel}</h2>
                </div>
            </div>
            
            <div className="w-full px-4">
                <div className="bg-gray-700 rounded-md p-2 mb-4">
                    <input
                        type="text"
                        placeholder="Escribe el canal a buscar"
                        className="w-full p-3 rounded text-center bg-gray-200 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="grid grid-cols-3 gap-2 w-full">
                    <button 
                        className="py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={handlePreviousChannel}
                    >
                        Anterior
                    </button>
                    <button 
                        className="py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={handleCambiar}
                    >
                        Cambiar
                    </button>
                    <button 
                        className="py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={handleNextChannel}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
            
            <div className="w-full bg-gray-800 mt-2 rounded-b-lg p-2 flex justify-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
        </div>
    );
};

export default UseStateHook;