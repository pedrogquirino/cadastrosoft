import {getAll, create} from '../../api/Api';

const basePath = 'http://localhost:3001';
const pathPessoa = '/pessoa';


export const getAllPessoa = () => {    
    const url = basePath + pathPessoa;
    return getAll(url)
}

export const createPessoa = () => {

    const body = 
    {
        "nome": "Pedro G Quirino"   ,
        "email": "donsonight@gmail.com",
        "nacionalidade": "Brasileira",
        "naturalidade": "Campina Grande",
        "dataNascimento": "1983-08-26"    
    }
    
    return create(basePath + pathPessoa,null, body)
}