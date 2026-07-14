interface ImagenProps {
  url: string;
  ancho: string;
  alto: string;
}

export default function Imagen({ url, ancho, alto }: ImagenProps) {
  const estilos = {
    width: ancho,
    height: alto,
    borderRadius: '10px',
    objectFit: 'cover' as const 
  };

  return <img src={url} alt="Imagen del componente" style={estilos} />;
}