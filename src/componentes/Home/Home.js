import axios from "axios";
import { React, useEffect} from "react";
import { Tabela,  } from "./styled";
import {Link} from "react-router-dom";
import Edit from "./img/edit.png"
import Del from "./img/delete.png"
import Topo from "./Topo";


const Home = ({post, loadUser, baseURL, setPost }) => {
 
    // Pega os valores de dentro da API
    useEffect(()=>{
      loadUser()
    },[]);
  
// Deleta elemento da API 
    const delet = async (id)=> {
      await axios.delete(`${baseURL + id}`)
      loadUser()
    }
    // Filtra contato
   const busfilter =({target})=>{
    if(!target.value){
        setPost(loadUser())
        return
    }
    const filt = post.filter((f)=>f.Nome.includes(target.value))
    setPost(filt)
   }
  return (<>
    <Topo />
      <Tabela><div className="conteiner">
        <input type="text" placeholder="Buscar contato 🔍" onChange={busfilter} ></input>
        <thead> 
            <tr>
                <th style={{borderTopLeftRadius: 10}} >Nome</th> 
                 <th>Email</th>
                <th>Telefone</th>
                <th style={{borderTopRightRadius: 10}}>Editar</th>  
            </tr>
        </thead>
        <tbody>{post && post.length > 0 ? post.map((posts)=>{return(
      <tr>
        <td>{posts.Nome}</td>
        <td>{posts.Emial}</td>
        <td>{posts.Telefone}</td>
        <td>
        <Link to={{pathname: `/editar/${posts.id}`}}>
        <button><img alt='edit' style={{width:35, padding:2}} src={Edit} ></img></button>
        </Link>
       <button onClick={ () => {delet(posts.id)}}><img alt='delet' style={{width:35, padding:2}} src={Del} ></img></button>
        </td>
      </tr>
      )
     }): <h4 style={{color:"#464646"}} >Sem contatos. Click em +add</h4>}</tbody> 
    </div></Tabela></> 
   
    )}

export default Home;

