import React from 'react';
import CadastroFormulario from './CadastroFormulario';
import CadastroTabela from './CadastroTabela';


const CadastroPessoa = (props) => {

  return (          

    <div className="CadastroPessoa">

      <div className="CadastroPessoaFormulario">
        <CadastroFormulario/>
      </div>       

      <div className="CadastroPessoaTabela">
          <CadastroTabela dados={props.dados} />
      </div> 

    </div>
  )
}

export default CadastroPessoa