'use client';

import Imagen from "../components/Imagen";
import Parrafo from "../components/Parrafo";
import Titulo from "../components/Tittle";
import Contador from "../components/Contador"
import Cambiar from "../components/Cambiar";
import CambiarColor from "@/components/CambiarColor";
import { useState } from "react";

export default function Home() {
  const [fondoApp, setFondoApp] = useState('bg-zinc-50');
  const [fondoMain, setFondoMain] = useState('bg-white');

  const alternarColor = () => {
    if (fondoApp === 'bg-zinc-50') {
      setFondoApp('bg-black');
      setFondoMain('bg-zinc-900');
    } else {
      setFondoApp('bg-zinc-50');
      setFondoMain('bg-white');
    }
  };
  return (
      <div>
        <div className={`flex flex-col flex-1 items-center justify-center font-sans min-h-screen transition-colors duration-500 ${fondoApp}`}>
          <main className={`flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 transition-colors duration-500 ${fondoMain}`}>

            <Titulo
              textoTitulo="Titulo de prueba"
              tipoFuente="Arial, sans-serif"
              tamanoTexto="32px"
              color="#0056b3" />
            <Parrafo
              textoParrafo="Aqui estara todo el contenido informativo de la pagina."
              tipoFuente="Courier New, monospace"
              tamanoTexto="16px"
              color="#333333"
            />
            <Imagen
              url="/Logo_ITSUR.png"
              ancho="200px"
              alto="auto"
            />
            <Contador />
            <Cambiar />

            <CambiarColor
              fondoActual={fondoApp}
              alHacerClick={alternarColor}
            />

          </main>
        </div>
      </div>
  );
}
