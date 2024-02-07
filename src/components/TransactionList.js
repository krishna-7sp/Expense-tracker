import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'


export const TransactionList = (transaction) => {
  
  const {transactions} = useContext(GlobalContext);

  return (
    <>
        <h4>History</h4>
        <ul class="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction} />))}
        </ul>
    </>
  )
}

