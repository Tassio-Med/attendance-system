import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import firebase from '../../services/firebaseConnection';
import Header from '../../components/Header';
import Title from '../../components/Title';

import './new.css';
import { BsPlusSquare } from 'react-icons/bs';
import { toast } from 'react-toastify';


export default function New() {

  const [loadCustomers, setLoadCustomers] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState([]);
  
  
  const [assunto, setAssunto] = useState('Suporte');
  const [status, setStatus] = useState('Aberto');
  const [complemento, setComplemento] = useState('');
  
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadCustomers(){
      await firebase.firestore().collection('customers')
      .get()
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nomeFantasia: doc.data().nomeFantasia
          })
        })

        if(lista.length === 0){
          console.log('NENHUMA EMPRESA ENCONTRADA');
          setCustomers([{ id: '1', nomeFantasia: 'FREELA'}]);
          setLoadCustomers(false);
          return;
        }

        setCustomers(lista);
        setLoadCustomers(false);

      })
      .catch((error) => {
        console.log('DEU ALGUM ERRO!', error);
        setLoadCustomers(false);
        setCustomers([{ id: '1', nomeFantasia: ''}]);
      })
    }
    loadCustomers();
  }, []);

  async function handleRegister(e){
    e.preventDefault();

    await firebase.firestore.collection('chamados')
    .add({
      created: new Date(),
      cliente: customers[customerSelected].nomeFantasia,
      clienteId: customers[customerSelected].id,
      assunto: assunto,
      satatus: status,
      complemento: complemento,
      useId: user.uid
    })
    .then(() => {
      toast.error('Chamado criado com sucesso!');
      setComplemento('');
      setCustomerSelected(0);
    })
    .catch((err) => {
      toast.error('Erro ao registrar, tente mais tarde.')
      console.log(err);
    })
      
  }

  function handleChangeSelect(e){
    setAssunto(e.target.value);
    console.log(e.target.value);
  }

  function handleOptionChange(e){
    setStatus(e.target.value);
    console.log(e.target.value);
  }

  function handleChangeCustomers(e){
    console.log('INDEX DO CLIENTE SELECIONADO: ', e.target.value);
    console.log('Cliente selecionado ', customers[e.target.value]);
    setCustomerSelected(e.target.value);
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

            {loadCustomers ? (
              <input type="text" disabled={true} value="Carregando clientes..." />
            ) : (
                <select value={customerSelected} onChange={handleChangeCustomers}>
                {customers.map((item,index) => {
                  return(
                    <option key={item.id} value={index}>
                      {item.nomeFantasia}
                    </option>
                  )
                })}
              </select>
            )}

            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
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
              onChange={handleOptionChange}
              checked={ status === 'Aberto' }
              />
              <span>Em Aberto</span>

              <input 
              type="radio"
              name="radio"
              value="Progresso"
              onChange={handleOptionChange}
              checked={ status === 'Progresso' }
              />
              <span>Progresso</span>

              <input 
              type="radio"
              name="radio"
              value="Atendido"
              onChange={handleOptionChange}
              checked={ status === 'Atendido' }
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)."
              value={complemento}
              onChange={ (e) => setComplemento(e.target.value) }
            />
            
            <button type="submit">Registrar</button>

          </form>

        </div>
      </div>
    </div>
  )
}
