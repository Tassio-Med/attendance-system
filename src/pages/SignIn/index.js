// import { useState } from "react"; 
// import { Link } from "react-router-dom";
// import './signin.css';
// import logo from "../../assets/avatar_icon.png"

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handleSubmit(e){
//     e.preventDefault();
//     alert("CLICOU!")
//   }

//   return (
//     <div className="container-center">
//       <div className="login">
//         <div className="logo-area">
//           <img src={logo} alt="Logotipo do sistema" />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <h1>Entrar</h1>
//           <input type="text" placeholder="user_email@email.com" value={email} onChange={ (e) => setEmail(e.target.value)}/>
//           <input type="password" placeholder="*******" value={password} onChange={ (e) => setPassword(e.target.value)}/>
//           <button type="submit">Acessar</button>
//         </form>

//         <Link to="/register">Criar uma conta</Link>
//       </div>
//     </div>
//   );
// }

// export default SignIn;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
// import logo from '../../assets/logo.png';
import logo from "../../assets/avatar_icon.png"

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('CLICOU')
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } />
          <button type="submit">Acessar</button>
        </form>  

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignIn;
