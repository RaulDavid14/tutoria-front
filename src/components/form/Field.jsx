
export default function Field({label, clase, name, id, value, placeholder, type})
{
    /*
    const requerido = required == true ? 'required' : '';
    const visible = visible == true ? 'disabled' : '';
    */
    return (
        <>
            <div className={clase}>
                <div className="form-floating">
                    <input type={type} className="form-control" name={name} id={id} placeholder={placeholder} value={value}/>
                    <label htmlFor="floatingInput">{label}</label>
                </div>
            </div>
        </>
    )
}
