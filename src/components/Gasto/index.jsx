import React from "react";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";

import { formatearFecha } from "../../helpers";

import icono_ahorro from "../../img/icono_ahorro.svg";
import icono_casa from "../../img/icono_casa.svg";
import icono_comida from "../../img/icono_comida.svg";
import icono_gastos from "../../img/icono_gastos.svg";
import icono_entretenimiento from "../../img/icono_entretenimiento.svg";
import icono_salud from "../../img/icono_salud.svg";
import icono_suscripciones from "../../img/icono_suscripciones.svg";

const bibliotecaImagenes = {
  ahorro: icono_ahorro,
  casa: icono_casa,
  comida: icono_comida,
  gastos: icono_gastos,
  entretenimiento: icono_entretenimiento,
  salud: icono_salud,
  suscripciones: icono_suscripciones,
};

const Gasto = ({ gasto = { }, setGastoEditar = ( ) => {}, eliminarGasto = () => {} }) => {
  const { categorias, nombreGasto, cantidadGasto, fecha, id } = gasto;


  const leadingActions = () => (
    <LeadingActions> 
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction  destructive={true} onClick={() => eliminarGasto(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem 
      leadingActions = { leadingActions() } //Efecto derecha
      trailingActions = { trailingActions() } // Efecto Izquierda
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={bibliotecaImagenes[categorias]} alt="Imagenes" />
            <div className="descripcion-gasto">
              <p className="categoria">{categorias}</p>
              <p className="nombre-gasto"> {nombreGasto}</p>
              <p className="fecha-gasto">
                {" "}
                Agregado el: <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidadGasto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
