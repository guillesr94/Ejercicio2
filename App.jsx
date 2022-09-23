import './App.css';
import ComponenteMotrar from './components/container/ComponenteMotrar';


function App() {
  return (
    <>
    <ComponenteMotrar />
    </>
  );
}

export default App;





// Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

// Nombre: que será un String.

// Apellido: también un String.

// Email: de nuevo un String.

// Conectado: será un booleano que nos indicará si la persona está conectada o no.

// Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

// Si el contacto está conectado, se debe mostrar: Contacto En Línea

// Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

// Renderizado de componentes en la solución:

// El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

// El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

// Recordatorio: Haz uso de Proptypes adecuadamente