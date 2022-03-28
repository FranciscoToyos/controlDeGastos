import { useState } from "react";
import Mensajes from "../Mensaje";
const categoria = [
  {
    id: 1,
    label: "Ahorro",
    value: "ahorro",
  },
  {
    id: 2,
    label: "Comida",
    value: "comida",
  },
  {
    id: 3,
    label: "Casa",
    value: "casa",
  },
  {
    id: 4,
    label: "Gastos Varios",
    value: "gastos",
  },
  {
    id: 5,
    label: "Entretenimiento",
    value: "entretenimiento",
  },
  {
    id: 6,
    label: "Salud",
    value: "salud",
  },
  {
    id: 7,
    label: "Suscripciones",
    value: "suscripciones",
  },
];

const FormularioGasto = ({
  animarModal = false,

  nombreGasto = "",
  setNombreGasto = () => {},

  cantidadGasto = "",
  setCantidadGasto = () => {},

  categorias = '',
  setCategorias = () => {},

  guardarGasto = () => {},

  gastoEditar = {},

  id = '',
  fecha = ''
}) => {
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if ([nombreGasto, cantidadGasto, categorias].includes("")) {
      setMensajeError("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensajeError("");
      }, 3000);
    }

    

    guardarGasto({nombreGasto, cantidadGasto, categorias, fecha, id});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={` formulario ${animarModal ? "animar" : "cerrar"}`}
    >
      <legend>{ gastoEditar.nombreGasto ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>
      {mensajeError && <Mensajes tipo="error"> {mensajeError} </Mensajes>}
      <div className="campo">
        <label htmlFor="nombre"> Nombre Gasto </label>

        <input
          id="nombre"
          type="text"
          placeholder="Añade el Nombre del gasto"
          value={nombreGasto}
          onChange={(evt) => setNombreGasto(evt.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="cantidad"> Cantidad </label>

        <input
          id="cantidad"
          type="number"
          placeholder="Añade la Cantidad del gasto"
          value={cantidadGasto}
          onChange={(evt) => setCantidadGasto(Number(evt.target.value))}
        />
      </div>

      <div className="campo">
        <label htmlFor="categoria"> Categoría </label>

        <select
          id="categoria"
          value={categorias}
          onChange={(evt) => setCategorias(evt.target.value)}
        >
          <option value="">✔ -- Seleccione --</option>
          {categoria.map(({ label, value, id }) => {
            return (
              <option key={id} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </div>

      <input type="submit" value={ gastoEditar.nombreGasto ? 'Guardar cambios' : 'Añadir Gasto' } />
    </form>
  );
};

export default FormularioGasto;
