import React from 'react';
import './CadastroPessoa.css';
import CadastroPessoaFormulario from './CadastroPessoaFormulario.js';
import CadastroPessoaTabela from './CadastroPessoaTabela';


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
