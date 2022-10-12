import styled from "styled-components";



export const Formulario = styled.div`

.cont{
    display:flex;
    flex-direction:column;
    padding: 15px;
    background-color: #4242b4bd;
width: 400px;
margin-top:100px;
margin-left: 500px;
color: white;
box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.5);
}
button{
padding:5px;
margin:10px;
background-color: #4242b4bd;
color:white;
border:none;
cursor: pointer;
border-radius:5px;
font-size:17px;

}
input{
    border-bottom: 2px solid #4d0080;
    border-top:none;
    border-left:none;
    border-right:none;
    font-size:20px;
    background-color: #ffffff99;
}input:focus{
   box-shadow: 0 0 0 0;
   outline:0;
   background-color: #ffffff;
}
label{
    padding:5px;
}
h1{
    border-left: 2px solid #4d0080;
    padding: 5px;
}
@media only screen and (max-width: 700px){
    .cont{
        margin-left:40px;
        
    }
  }
`