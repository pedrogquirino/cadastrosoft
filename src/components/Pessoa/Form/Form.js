import React from 'react';
import './Form.css';
import PessoaFormCadastro from './FormCadastro.js'
import PessoaFormLista from './FormLista.js'



const Form = () => 
(
    <div className="CadastroPessoa">
      <header className="CadastroPessoa-header">
      </header>
      <div className="CadastroPessoaFormulario">
        <PessoaFormCadastro />
      </div>
      <div className="CadastroPessoaFormulario">
        <PessoaFormLista />
      </div>                    
    </div>
);


export default Form;
