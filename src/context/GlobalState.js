import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
} // baslangıc durumunu olusturduk


// Create Context
export const GlobalContext = createContext(initialState);


// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({ // dispatch fonksiyonu, reducer fonksiyonunu tetikler
        type: 'DELETE_TRANSACTION',
        payload: id
  });
}

function addTransaction(transaction) {
    dispatch({ // dispatch fonksiyonu, reducer fonksiyonunu tetikler
        type: 'ADD_TRANSACTION',
        payload: transaction
  });
}

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


/*
useReducer hook'unu kullanarak uyg genelinde verileri saklayıp
güncelleyebiliyoruz.

createContext fonk ile react context olusturup,uyg alt bileşenlerle paylasırız

*/