interface ParrafoProps {
    textoParrafo: string;
    tipoFuente: string;
    tamanoTexto: string;
    color: string;
}

export default function Parrafo({textoParrafo,tipoFuente, tamanoTexto, color }: ParrafoProps) {
  const estilos = {
    fontFamily: tipoFuente,
    fontSize: tamanoTexto,
    color: color,
    lineHeight: '1.5'
  };

  return <p style={estilos}>{textoParrafo}</p>;
}