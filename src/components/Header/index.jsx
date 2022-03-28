
import { ControlPresupuesto, NuevoPresupuesto } from "..";

const Header = ({
  presupuesto = 0,
  setPresupuesto = () => {},
  presupuestoValido = false,
  setPresupuestoValido = () => {},
  gastos = []
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {presupuestoValido ? (
        <ControlPresupuesto
          gastos = { gastos }
          presupuesto = { presupuesto }
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresupuestoValido={setPresupuestoValido}
        />
      )}
    </header>
  );
};

export default Header;
