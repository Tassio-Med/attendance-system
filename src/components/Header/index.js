import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar_icon.png';

import { Link } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { BsPersonBadge } from 'react-icons/bs';

export default function Header() {
  const { user } = useContext(AuthContext);

  return(
    <div className='sidebar'>
      <div>
        <img src={ user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto do perfil" />
      </div>

      <Link to="/dashboard">
        <BiHomeCircle color='#fff' size={20}/>
        Chamados
      </Link>
      <Link to="/customers">
        <BsPersonBadge color='#fff' size={20}/>
        Clientes
      </Link>
      <Link to="/profile">
        <FiSettings color='#fff' size={20}/>
        Configurações
      </Link>
    </div>
  )
}