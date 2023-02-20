import './dashboard.css';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { BsListTask, BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard() {
  // const {signOut} = useContext(AuthContext);
  const [chamados, setChamados] = useState([]);

  return(
    <div>
      <Header/>
      <div className='content'>
        <Title name="Atendimentos">
          <BsListTask size={25}/>
        </Title>

        {chamados.length === 0 ? (
          <div className='container dashboard'>
           <span>Nenhum chamado registrado...</span>

           <Link className='new'>
             <BsPlusLg size={15} color="#fff"/>
             Novo chamado
           </Link>
          </div>
          
        ) : (
          <>
            <Link className='new'>
             <BsPlusLg size={15} color="#fff"/>
             Novo chamado
           </Link>
          </>
        )}
      </div>
    </div>
  )
}