import axios from "axios";
import {React,useState} from 'react'
import {Formulario} from './styled'
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid'


const Novo = ({baseURL}) => {
 
  const ids = uuid()
  let unicoId = ids.slice(0.8)
  let history = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

    //  funsao que cria um novo contato a tabela 
  function cria(){
    if(nome && email && tel){
     axios.post(baseURL, {
      id: unicoId,
      Nome: nome,
      Emial: email,
      Telefone: tel
    }).then((console.log("ok")))
   
    history("/")
}else{alert("Preencha todos os campos")}
}
 
  return (
    <Formulario>
    <div className='cont'>
      <h1>Novo contato</h1>
      <label>Nome</label>
      <input type="text" value={nome} onChange={(e)=> setNome  (e.target.value)}></input>
      <label>Email</label>
      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      <label>Telefone</label>
      <input type="tel" value={tel} onChange={(e)=> setTel(e.target.value)} ></input>
      <button onClick={cria} >Salvar</button>
    </div></Formulario>
  )
}

export default Novo