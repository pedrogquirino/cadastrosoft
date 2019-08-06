import React,{ useState } from 'react';
import styles from './Login.module.css';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import Card from '@bit/react-bootstrap.react-bootstrap.card';
import Col from '@bit/react-bootstrap.react-bootstrap.col';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';



function FormLogin()
{
  const [login,setLogin] = useState("admin");    

  function validaDados(){

  }

  return <Card className={styles.loginCard}>
    <h2 className={styles.titulo}>Cadastro Soft</h2>
    <Form>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label size="sm">Login</Form.Label>
          <Form.Control 
            placeholder="Login"/>        
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label size="sm">Senha</Form.Label>
          <Form.Control 
            placeholder="Senha" />   
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" 
        onClick={
          validaDados()
        }>
        Login
      </Button>
    </Form>
  </Card>  
}


export default () => (<div><ReactBootstrapStyle /><FormLogin /></div>)
