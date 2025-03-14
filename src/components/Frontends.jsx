import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";
import { Outlet } from "react-router-dom";

const Frontends = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <Outlet />{" "}
          {/* Aquí se renderizará el contenido de la ruta hija (como Home) */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Frontends;
