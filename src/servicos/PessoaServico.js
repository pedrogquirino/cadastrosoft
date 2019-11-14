import * as API from '../api/Api';

const basePath = 'http://localhost:3001';
const pathPessoa = '/pessoa'


export const getAll = () => {    
    const url = basePath + pathPessoa;
    return API.getAll(url);    
}

export const create = () => {

    const body = 
    {
        "nome": "Pedro G Quirino"   ,
        "email": "donsonight@gmail.com",
        "nacionalidade": "Brasileira",
        "naturalidade": "Campina Grande",
        "dataNascimento": "1983-08-26"    
    }
    return API.create(basePath + pathPessoa,null, body)
}