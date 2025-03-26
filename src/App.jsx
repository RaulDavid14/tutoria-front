import { useState } from 'react'
import DatosEstudiante from './components/pages/DatosEstudiante'


export default function App() {

  return (
    <>
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="text-center">Ficha de identificación del tutorado</h1>
        </div>
        <div className="col-12 mt-3">
            <h3 className='text-center'>Datos generales</h3>
        </div>
        <div className="col-12 mt-5">
          <DatosEstudiante />
        </div>
      </div>
    </>
  )
}
