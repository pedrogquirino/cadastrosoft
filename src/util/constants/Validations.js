const inputForms = {
    email: {
        type: 'email',
        message: 'Digite um endereço de email válido!',
    },
    campoObrigatorio(field){

        return {
            required: true,
            message: 'Favor preencher o seu ' + field + '.'
        }
    }

}

export const Validations = {

    inputForms
}

