import React from 'react';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import Col from '@bit/react-bootstrap.react-bootstrap.col';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';



function CadastroPessoaFormulario() {

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNome">
                    <Form.Label size="sm">Nome completo</Form.Label>
                    <Form.Control placeholder="Digite seu nome completo" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNaturalidade">
                    <Form.Label>Naturalidade</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridNacionalidade">
                    <Form.Label>Nacionalidade</Form.Label>
                    <Form.Control />                    
                </Form.Group>                
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="formGridDataNascimento">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control placeholder="DataNascimento" />
                </Form.Group>
                <Form.Group/>
                <Form.Group as={Col} controlId="formGridSexo">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control as="select">
                        <option>Escolha...</option>                        
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Gravar
             </Button>
        </Form>
    )

}



export default () => (<div><ReactBootstrapStyle /><CadastroPessoaFormulario /></div>)