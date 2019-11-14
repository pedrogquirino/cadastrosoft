export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
  };

export const setTitle = (store, newTitle) => {
    const title = newTitle;
    store.setState({ title });
  };

export const setPessoaLista = (store, novaLista) => {
    const pessoaLista = novaLista;
    store.setState({ pessoaLista });
  };

export const setPessoa = (store, pessoa) => {
    const novaPessoa = pessoa;
    store.setState({ novaPessoa });
  };