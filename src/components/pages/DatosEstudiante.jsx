import { useState } from "react";
import Field from "../form/Field";
import SelectField from "../form/SelectFIeld";

export default function DatosEstudiante() {
    const [opciones] = useState([
        { id: 1, nombre: "Arquitectura" },
        { id: 2, nombre: "Artes audiovisuales" },
        { id: 3, nombre: "Artes escénicas" },
        { id: 4, nombre: "Diseño arte y tecnologías interactivas" },
        { id: 5, nombre: "Diseño de interiores y ambientación" },
        { id: 6, nombre: "Diseño de modas" },
        { id: 7, nombre: "Diseño industrial" },
        { id: 8, nombre: "Diseño para la comunicación gráfica" },
        { id: 9, nombre: "Música" },
        { id: 10, nombre: "Urbanística y medio ambiente" },
    ]);

    const [genero] = useState([
        { id: 1, nombre: "Masculino" },
        { id: 2, nombre: "Femenino" },
        { id: 3, nombre: "Otro" },
    ]);
    
    const [edocivil] = useState([
        { id: 1, nombre: "Soltero"},
        { id: 2, nombre: "Casado"},
        { id: 3, nombre: "Divorciado"},
        { id: 4, nombre: "Viudo"},
    ]);

    const col4 = "col-4";
    const col12 = "col-12";

    return (
        <div className="row">
            <div className={`${col12} row mt-3`}>
                <Field type="text" label="Apellido Paterno" placeholder="" name="apellidoPaterno" clase={col4} />
                <Field type="text" label="Apellido Materno" placeholder="" name="apellidoMaterno" clase={col4} />
                <Field type="text" label="Nombre(s)" placeholder="" name="nombres" clase={col4} />
            </div>
            <div className={`${col12} row mt-5`}>
                <Field type="number" label="Código" placeholder="" name="codigo" clase="col-3" />
                <SelectField label="Carrera" name="carrera" clase="col-6" opciones={opciones} />
                <Field type="number" label="Edad" placeholder="" name="edad" clase="col-3" />
            </div>
            <div className={`${col12} row mt-5`}>
                <SelectField label="" name="carrera" clase="col-6" opciones={genero} />
                <SelectField clase="col-6" label="Estado Civil" opciones={edocivil}/>
            </div>
        </div>
    );
}