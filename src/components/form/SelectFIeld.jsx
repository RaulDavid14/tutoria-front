
export default function SelectField({ label, clase, name, id, opciones}) {
    return (
        <div className={clase}>
            <div className="form-floating">
                <select name={name} id={id} className="form-select">
                    <option value="-1">Selecciona una Opción</option>
                    {opciones.map((opcion) => (
                        <option key={opcion.id} value={opcion.id}>
                            {opcion.nombre}
                        </option>
                    ))}
                </select>
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    );
}
