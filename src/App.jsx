//Hooks
import { useState, useEffect } from "react";
//Components
import { Header, ListadoGastos, Modals } from "./components";
import { generarID } from "./helpers";

//Imagenes
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  // State's
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [presupuestoValido, setPresupuestoValido] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      // Nuevo
      gasto.id = generarID();
      gasto.fecha = Date.now();

      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModalOpen(false);
    }, 500);
  };

  const handleNuevoGasto = () => {
    setModalOpen(true);

    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModalOpen(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;

    if(presupuestoLS > 0){
      setPresupuestoValido(true)
    }

  }, []);

  return (
    <div className={modalOpen ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />
      {presupuestoValido && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={iconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modalOpen && (
        <Modals
          setModalOpen={setModalOpen}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
