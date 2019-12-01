import React from 'react';
import CadastroPessoa from '../components/pessoa/Cadastro';
import useGlobal from '../helpers/hooks/store'
import * as PessoaServico from '../domains/pessoa/PessoaServico';

  

const getPessoas = () => {

    return PessoaServico.getAllPessoa()
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
