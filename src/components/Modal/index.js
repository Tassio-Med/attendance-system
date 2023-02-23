import React from 'react'
import './modal.css';

import {RiCloseCircleFill} from 'react-icons/ri';

export default function Modal({conteudo,close}) {
  return (
     <div className='modal'>
      <div className='container'>
        <button className='close' onClick={ close }>
          <RiCloseCircleFill sizer={23} color="#fff"/>
          Voltar
        </button>

        <div className='row'>
          <h2>Detalhes do chamado</h2>
          <div>
            <span>
              Cliente:
              <p>{conteudo.cliente}</p>
            </span>
          </div>

          <div className='row'>
            <span>
              Assunto: 
              <p>{conteudo.assunto}</p>
            </span>
            <span>
              Cadastrado em:
              <p>{conteudo.createdFormated}</p>
            </span>
          </div>

          <div className='row'>
            <span>
              Status:
              <p style={{ color: '#fff', backgroundColor: conteudo.status === "Aberto" ? '#5cb85c' : '#999' }}>{conteudo.status}</p>
            </span>
          </div>

          {conteudo.complemento !== '' && (
            <>
              <h3>Complemento</h3>
              <p>
                {conteudo.complemento}
              </p>
            </>
          )}

        </div>
      </div>
     </div>
  )
}
