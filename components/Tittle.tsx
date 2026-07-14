interface TituloProps{
    textoTitulo: string;
    tipoFuente : string;
    tamanoTexto: string;
    color: string;       
}

export default function Titulo({textoTitulo, tipoFuente, tamanoTexto, color }: TituloProps) {
  const estilos = {
    fontFamily: tipoFuente,
    fontSize: tamanoTexto,
    color: color,
    margin: '10px 0'
  };

  return <h1 style={estilos}>{textoTitulo}</h1>;
}