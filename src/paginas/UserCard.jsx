export function UserCard({ user, url, children }) {
  return (
    <article className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 my-12 border border-gray-200 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Avatar con indicador de estado - Utiliza posicionamiento relativo/absoluto para colocar el indicador de estado */}
      <div className="relative mb-4 md:mb-0">
        <img 
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-blue-500 p-1 bg-white" 
          src={user.image} 
          alt={user.name} 
        />
        {/* Indicador de estado online - Elemento absoluto posicionado en la esquina inferior derecha */}
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" title="Online"></div>
      </div>
      
      {/* Contenedor principal de información - Usa flex para organizar el contenido en columna */}
      <div className="flex flex-col flex-1 gap-4 text-center md:text-left">
        {/* Encabezado con nombre de usuario - Fuente grande y negrita para destacar */}
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        
        {/* Contenedor para children - Área específica con estilo personalizado */}
        <div className="text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
          {children}
        </div>
        
        {/* Sección de estadísticas - Grid para mostrar métricas de usuario */}
        <div className="grid grid-cols-3 gap-2 my-2 py-3 border-y border-gray-100">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">1.2K</div>
            <div className="text-xs text-gray-500">Seguidores</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">342</div>
            <div className="text-xs text-gray-500">Siguiendo</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">42</div>
            <div className="text-xs text-gray-500">Publicaciones</div>
          </div>
        </div>
        
        {/* Footer con enlaces a redes sociales - Usa flex con wrap para responsividad */}
        <footer className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
          {/* Enlace al sitio web - Botón estilizado con icono y texto */}
          <a 
            href={url.site} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            Site
          </a>
          
          {/* Enlace a Twitch - Usa el color corporativo de Twitch */}
          <a 
            href={url.twitch} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 text-purple-600 font-medium hover:bg-purple-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
            Twitch
          </a>
          
          {/* Enlace a Twitter - Usa el color corporativo de Twitter */}
          <a 
            href={url.twitter} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-50 text-sky-600 font-medium hover:bg-sky-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            Twitter
          </a>
        </footer>
      </div>
    </article>
  );
}