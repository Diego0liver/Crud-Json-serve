import axios from "axios";
import {React, useState} from "react";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Novo from "./componentes/New/Novo";
import Editar from "./componentes/Edit/Editar";

const baseURL = "http://localhost:3004/posts/"
 
function App() {
  const [post, setPost] = useState([])
   

    const loadUser = async () => {
      const result = await axios.get(baseURL)
      setPost(result.data)
    }
  

// /
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home post={post} loadUser={loadUser} baseURL={baseURL} setPost={setPost}/>} />
          <Route path='/novocontato' element={<Novo baseURL={baseURL} />} />  
          <Route path='/editar/:id' element={<Editar loadUser={loadUser} baseURL={baseURL}/>} />  
        </Routes>
      </Router>
    </div>
    );
}

export default App;
