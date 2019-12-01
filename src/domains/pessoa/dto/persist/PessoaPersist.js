class PessoaPersist extends ReactAxiom.Model {  static defaultState() {
    return {
      id: null,
      description: '',
      completed: false
    };
  }  

}