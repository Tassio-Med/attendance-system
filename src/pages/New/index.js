import React from 'react'

import './new.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { BsPlusSquare } from 'react-icons/bs';


export default function New() {

  function handleRegister(e){
    e.preventDefault();
    alert('TESTE')
  }

  return (
    <div>
      <Header/>

      <div className='content'>
        <Title name="Novo chamado">
          <BsPlusSquare size={24} />
        </Title>

        <div className="container">

          <form className="form-profile"  onSubmit={handleRegister}>
            
            <label>Cliente</label>
            <select>
              <option key={1} value={1}>
                Sujeito Programador
              </option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input 
              type="radio"
              name="radio"
              value="Aberto"
              />
              <span>Em Aberto</span>

              <input 
              type="radio"
              name="radio"
              value="Progresso"
              />
              <span>Progresso</span>

              <input 
              type="radio"
              name="radio"
              value="Atendido"
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)."
            />
            
            <button type="submit">Registrar</button>

          </form>

        </div>
      </div>
    </div>
  )
}
