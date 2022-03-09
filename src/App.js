import "./App.css";
import Tabla from "./Tabla.js";
import Formulario from "./Formulario";
import { useState } from "react";

function App() {
  const [colegios, setColegios] = useState([
    {
      nombre: "Claret",
      curso: "Economía",
      encargado: "Paula",
      lunes: "12:50",
      martes: "11:50",
      miercoles: "12:50",
      jueves: "11:50",
      viernes: "12:50",
    },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", width: "50%" }}>
        <Tabla colegios={colegios}></Tabla>
      </div>
      <div style={{ display: "flex", width: "50%" }}>
        <Formulario
          inputs={[
            { placeholder: "Colegio", name: "colegio" },
            { placeholder: "Curso", name: "curso" },
            { placeholder: "Encargado", name: "encargado" },
            { placeholder: "Horario Lunes?", name: "horarioLunes" },
            { placeholder: "Horario Martes?", name: "horarioMartes" },
            { placeholder: "Horario Miercoles?", name: "horarioMiercoles" },
            { placeholder: "Horario Jueves?", name: "horarioJueves" },
            { placeholder: "Horario Viernes?", name: "horarioViernes" },
          ]}
          tituloBoton={"Agregar"}
          onSubmit={(evento) => {
            const data = {
              nombre: evento.target[0].value,
              curso: evento.target[1].value,
              encargado: evento.target[2].value,
              lunes: evento.target[3].value,
              martes: evento.target[4].value,
              miercoles: evento.target[5].value,
              jueves: evento.target[6].value,
              viernes: evento.target[7].value,
            };

            if (!data.nombre) {
              alert("Agregale un nombre al colegio");
              return;
            }
            if (!data.curso) {
              alert("Especifica el curso");
              return;
            }
            setColegios((actual) => {
              const existe = actual.find((item) => item.nombre === data.nombre);
              if (existe) {
                existe.curso = data.curso;
                return actual;
              }
              return [...actual, data];
            });
          }}
        ></Formulario>
      </div>
    </div>
  );
}

export default App;
