const Mensajes = ({ children, tipo }) => {
  return <div className={`alerta ${tipo}`}> {children} </div>;
};

export default Mensajes;
