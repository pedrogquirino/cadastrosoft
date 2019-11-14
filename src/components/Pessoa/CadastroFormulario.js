import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button, Select, Cascader} from 'antd';

  import {Validations} from '../../util/constants/Validations.js'
  
  const { Option } = Select;

  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    }
  ]
   
  class CadastroFormulario extends React.Component {

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );

      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Nome completo" >
            {getFieldDecorator('Nome', {
              rules: [Validations.inputForms.campoObrigatorio('nome')],
            })(<Input placeholder="nome completo"/>)}
          </Form.Item>

          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                Validations.inputForms.email,
                Validations.inputForms.campoObrigatorio('email')
              ],
            })(<Input />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="Nacionalidade" >
            <Select defaultValue="Brasil" style={{ width: 200}}>
              <Option value="Brasil">Brasil</Option>
              <Option value="Portugal">Portugal</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>

        </Form>
      );
    }
  }
  
  export default Form.create({})(CadastroFormulario);  