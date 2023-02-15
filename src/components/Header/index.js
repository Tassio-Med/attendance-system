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

      <Link>
        <BiHomeCircle color='#fff' size={24}/>
        Chamados
      </Link>
      <Link>
        <BsPersonBadge color='#fff' size={24}/>
        Clientes
      </Link>
      <Link>
        <FiSettings color='#fff' size={24}/>
        Configurações
      </Link>
    </div>
  )
}