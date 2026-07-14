'use client';

// 1. Definimos los tipos de las props que va a recibir el componente
interface CambiarColorProps {
  fondoActual: string;
  alHacerClick: () => void;
}

// 2. Le indicamos al componente que use esa interfaz
export default function CambiarColor({ fondoActual, alHacerClick }: CambiarColorProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">

      <button
        onClick={alHacerClick}
        className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Cambiar color
      </button>
    </div>
  );
}   