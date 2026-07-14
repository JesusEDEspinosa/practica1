'use client';

import {useState} from 'react'; 

export default function Contador(){
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        console.log("Click");
        setContador(contador + 1);
    }

    return (
        <div className="flex items-center bg-black rounded-lg">
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}
            className="rounded-lg bg-blue-500 px-6 py-3 text-white font-medium ">
                Click
            </button>
        </div>
    );
}
