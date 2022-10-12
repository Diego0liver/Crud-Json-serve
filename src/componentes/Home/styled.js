import styled from "styled-components";


export const Tabela = styled.div`
.conteiner{background-image: linear-gradient(to right, rgb(255, 255, 255) , #dddddd);
text-align: center;
width:650px;
border-radius:10px;
margin-left: 350px;
box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);}
th{
    background-color:#3333acbd;
    padding:6px;
    width:350px;
    color:white;
}
td{
padding:10px;

}
button{
    cursor:pointer;
    border:none;
    background-color: #dddddd;
    
}
input{
    margin:10px;
    text-align:center;
    border-radius: 10px;
    border: 1px solid #3333acbd;
    outline: 0;
    font-size:16px;
    padding: 5px;
}

input:focus{
  box-shadow: 0 0 0.5em #3333acbd;
}
@media only screen and (max-width: 700px){
    .conteiner{
        margin-left:0px;
        width:500px;
    }
  }
`