import { useEffect, useState } from "react";
import { formatearCantidad } from "../../helpers";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ControlPresupuesto = ({ presupuesto = 0, gastos = [] }) => {
  // State's
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const totalGastado = gastos.reduce(
    (acc, elem) => elem.cantidadGasto + acc,
    0
  );
  const totalDisponible = presupuesto - totalGastado;

  const nuevoPorcentaje = (
    ((presupuesto - totalDisponible) / presupuesto) *
    100
  ).toFixed(2);

  useEffect(() => {
    setGastado(totalGastado);
    setDisponible(totalDisponible);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#3B82F6",
            trailColor: "#f5f5f5",
            textColor: "#3B82F6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
