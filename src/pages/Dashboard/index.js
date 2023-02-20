import './dashboard.css';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { BsListTask, BsPlusLg, BsSearch } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard() {
  // const {signOut} = useContext(AuthContext);
  const [chamados, setChamados] = useState([1]);

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

           <table>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cadastrado em</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Cliente">Sujeito</td>
                  <td data-label="Assunto">Suporte</td>
                  <td data-label="Status">
                    <span className="badge" style={{backgroundColor: '#5cb85c' }}>Em aberto</span>
                  </td>
                  <td data-label="Cadastrado">20/06/2021</td>
                  <td data-label="#">
                    <button className="action" style={{backgroundColor: '#3583f6' }}>
                      <BsSearch color="#FFF" size={17} />
                    </button>
                    <button className="action" style={{backgroundColor: '#F6a935' }}>
                      <FiEdit2 color="#FFF" size={17} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  )
}