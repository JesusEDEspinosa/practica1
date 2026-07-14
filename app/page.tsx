import Imagen from "../components/Imagen";
import Parrafo from "../components/Parrafo";
import Titulo from "../components/Tittle";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-sky-200">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-sky-100">
        <Titulo 
        textoTitulo="Titulo de prueba" 
        tipoFuente="Arial, sans-serif" 
        tamanoTexto="32px" 
        color="#0056b3"/>

        <Parrafo 
        textoParrafo="Aqui estara todo el contenido informativo de la pagina." 
        tipoFuente="Courier New, monospace" 
        tamanoTexto="16px" 
        color="#333333" 
      />

      <Imagen 
        url="/vercel.svg" 
        ancho="200px" 
        alto="auto" 
      />
      </main>
    </div>
  );
}
