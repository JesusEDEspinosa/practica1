'use client'

import {useState} from 'react';

export default function Cambiar() {
    const [imagen, setImagen] = useState('/Logo_ITSUR.png');

    const cambiarImagen = () => {
        if (imagen === '/Logo_ITSUR.png') {
            setImagen('/Logo_Softwareland.jpg')
        } else{
            setImagen('/Logo_ITSUR.png')
        }
    };

    return (
        <div className= "flex justify-center items-center">
            <img 
                src={imagen}
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />

            <button onClick={cambiarImagen}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
            >Cambiar Imagen
            </button>
        </div>
    );
};

