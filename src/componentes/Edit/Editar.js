import {React, useState, useEffect } from 'react' 
import {EditForm} from './styled'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";


const Editar = ({baseURL}) => {
  let history = useNavigate()
  let {id} = useParams()
const [put, setPut] = useState('')  
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [tel, setTel] = useState('')

useEffect(()=>{
valorEdit()
},[]);

const valorEdit=()=>{
  axios.get(`${baseURL + id}`)
  .then((response) => {
    setPut(response.data);
  });
}

function updatePost() {
  axios
    .put(`${baseURL + id}`, {
      Nome: nome,
      Emial: email,
      Telefone: tel
    })
    .then((response) => {
      setPut(response.data);
      history("/")
    });
}

  return (
  <EditForm>
    <div className='cont'>
      <h1>Editar Contato</h1>
      <label>Nome: {put.Nome}</label>
      <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)}></input>
      <label>Email: {put.Emial}:</label>
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      <label>Telefone: {put.Telefone}</label>
      <input type="number"value={tel} onChange={(e)=> setTel(e.target.value)} ></input>
      <button  onClick={updatePost} >Salvar</button>
    </div></EditForm>
  )
}

export default Editar