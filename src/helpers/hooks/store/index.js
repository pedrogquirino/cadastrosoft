import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../../hooks/actions";

const initialState = {
  counter: 0,
  title: "Title",
  pessoaLista: [],
  pessoaNova: ""
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
