import { useState, useEffect } from "react";

import cerrarBtn from "../../img/cerrar.svg";
import FormularioGasto from "../Form";

const Modals = ({
  setModalOpen = () => {},
  animarModal = false,
  setAnimarModal = () => {},
  guardarGasto = () => {},
  gastoEditar = {}
}) => {
  // State's
  const [categorias, setCategorias] = useState('');
  const [nombreGasto, setNombreGasto] = useState('');
  const [cantidadGasto, setCantidadGasto] = useState('');
  const [fecha,setFecha]= useState('')
  const [id,setId] = useState('')


  useEffect(() => {
    if(!!gastoEditar){
      setNombreGasto(gastoEditar.nombreGasto)
      setCategorias(gastoEditar.categorias)
      setCantidadGasto(gastoEditar.cantidadGasto)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }
  }, [])

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModalOpen(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>

      <FormularioGasto
        animarModal={animarModal}

        setCategorias={setCategorias}
        categorias={categorias}

        nombreGasto={nombreGasto}
        setNombreGasto={setNombreGasto}

        setCantidadGasto={setCantidadGasto}
        cantidadGasto={cantidadGasto}

        guardarGasto={guardarGasto}

        gastoEditar={gastoEditar}
        id={id}
        fecha={fecha}
      />
    </div>
  );
};

export default Modals;
