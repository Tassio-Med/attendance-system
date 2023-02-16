import './profile.css';
import Header from '../../components/Header';
import Title from  '../../components/Title';

import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';

import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import avatar from '../../assets/avatar_icon.png';

export default function Profile(){
  const { user, signOut } = useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

  return(
    <div>
      <Header/>
      <div className='content'>
        <Title name="Meu perfil">
          <FiSettings size={24} />
        </Title>

        <div className='container'>
          <form className="form-profile">

            <label className='label-avatar'>
              <span>
                <BsUpload  color='#ffff' size={24}/>
              </span>

              <input type="file" accept='image/*' /><br/>
              { avatarUrl == null ?
                <img src={avatar} width="250" height="250" alt="Foto de ícone avatar" />
                :
                <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuário" />
              }
            </label>

            <label>Nome</label>
            <input type="text" value={nome} onChange={ (e) => setNome(e.target.value) } />
            <label>Email</label>
            <input type="text" value={email}  disabled={true}/>

            <button type='submit'>Salvar</button>

          </form>
        </div>

        <div className='container'>
          <button className='logout-btn' onClick={() => signOut() }>
            Sair <AiOutlineLogout size={20}/>
          </button>
        </div>

      </div>
    </div>
  )
}