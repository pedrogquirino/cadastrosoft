import React from 'react';
import CadastroPessoa from '../components/Pessoa/Cadastro.js';
import useGlobal from '../hooks/store'
import * as PessoaServico from '../servicos/PessoaServico.js';


  

const getPessoas = () => {

    return PessoaServico.getAll()
        .then(value => value)
}

const Pessoa = () => {

  const [globalState, globalActions] = useGlobal();

  React.useEffect(() => {
        getPessoas()
        .then(value => globalActions.setPessoaLista(value))
    
  },[]);

  const pessoas = globalState.pessoaLista;

  return (     
    <CadastroPessoa dados={pessoas}/>
  )
}


export default Pessoa
