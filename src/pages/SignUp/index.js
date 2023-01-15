import { useState } from "react"; 
import {Link} from "react-router-dom";
// import "./signin.css";
import logo from "../../assets/avatar_icon.png"

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert("CLICOU!")
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="logo-area">
          <img src={logo} alt="Logotipo do sistema" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <input type="text" placeholder="Seu nome" value={nome} onChange={ (e) => setNome(e.target.value)} />
          <input type="text" placeholder="user_email@email.com" value={email} onChange={ (e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="*******" value={email} onChange={ (e) => setPassword(e.target.value)}/>
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="">Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;