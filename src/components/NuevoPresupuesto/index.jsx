import { useState } from "react";
import Mensajes from "../Mensaje";

const NuevoPresupuesto = ({
  presupuesto = 0,
  setPresupuesto = () => {},
  setPresupuestoValido = () => {},
}) => {
  const [mensaje, setMensaje] = useState("");

  const handleSubmitPresupuesto = (evt) => {
    evt.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
      return;
    }
    setMensaje("");
    setPresupuestoValido(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmitPresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="Number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(evt) => setPresupuesto(Number(evt.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />

        {mensaje && <Mensajes tipo="error"> {mensaje} </Mensajes>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
