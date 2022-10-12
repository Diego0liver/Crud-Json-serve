import React from 'react'
import { Link } from "react-router-dom";
import { Cabecalho } from './TopoStyle';
const Topo = () => {
  return (<>
    <Cabecalho>
    <div className='cont'>
    <h1>Lista de Contatos</h1>
    <Link to="/novocontato">
     <button>+Add</button>
   </Link>
    </div></Cabecalho>
   </>
  )
}

export default Topo