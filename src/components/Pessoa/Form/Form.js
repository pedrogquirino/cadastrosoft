import React from 'react';
import './CadastroPessoa.css';
import CadastroPessoaFormulario from './FormCadastro.js/index.js';
import CadastroPessoaTabela from './FormLista';


function CadastroPessoa() {
  return (
    <div className="CadastroPessoa">
      <header className="CadastroPessoa-header">
      </header>
      <div className="CadastroPessoaFormulario">
        <CadastroPessoaFormulario />
      </div>
      <div className="CadastroPessoaFormulario">
        <CadastroPessoaTabela />
      </div>                    
    </div>
  );
}

export default CadastroPessoa;
