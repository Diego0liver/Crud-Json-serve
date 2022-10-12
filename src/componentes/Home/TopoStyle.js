import styled from "styled-components";


export const Cabecalho = styled.div`

.cont{
    display: flex;
    justify-content:space-between;
    margin-top:50px;
    text-align:center;
    width:650px;
    margin-left: 350px;
}
h1{
  color: #464646;
}
button{
  margin-top:30px;
  margin-right:9px;
  font-size:20px;
  background-color:#3333acbd;
  color:white;
  border:none;
  padding:5px;
  border-radius:5px;
  cursor: pointer;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 700px){
    .cont{
        margin-left:0px;
        width:500px;
    }
  }
`