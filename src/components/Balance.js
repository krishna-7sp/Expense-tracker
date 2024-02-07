import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
  const {transactions} = useContext(GlobalContext); // useContext hook u ile globalcontext icindeki transaction verisine erisim saglanır
  
  const amounts = transactions.map(transaction => transaction.amount); // amounts değişkeni, transactions dizisinden tüm işlemlerin miktarlarını (amount) içeren bir dizi oluşturur
  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4>Balance</h4>
        <h1>${total}</h1>
    </>
  )
}
