import React from 'react';
import './Form.css';
import PessoaFormCadastro from '../../components/Pessoa/Form/FormCadastro'
import PessoaFormLista from '../../components/Pessoa/Form/FormLista'



const Form = () => 
(
    <div className="CadastroPessoa">
      <div className="CadastroPessoaFormulario">
        <PessoaFormCadastro />
      </div>
      <div className="CadastroPessoaFormulario">
        <PessoaFormLista />
      </div>                    
    </div>
);


export default Form;
