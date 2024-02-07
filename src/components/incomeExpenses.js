import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'



export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);  // amounts değişkeni, transactions dizisinden tüm işlemlerin miktarlarını (amount) içeren bir dizi oluşturur.
  const income = amounts
  .filter(item => item > 0)  // sadece pozitif olanları filtreler
  .reduce((acc, item) => (acc += item), 0) // filtrelenmiş olanları toplar
  .toFixed(2); // virgülden sonra 2 basamak olacak şekilde yuvarlar

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);  // sadece negatif olanları filtreler, toplar ve negatif işaretini kaldırır

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">{income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">{expense}</p>
    </div>
  </div>
  )
}


/* 
amounts.filter(item => item < 0): amounts dizisindeki tüm elemanları gezerek, miktarı negatif (gider) olanları filtreler. 
.filter() yöntemi, belirtilen koşula uyan elemanları içeren yeni bir dizi döndürür.
.reduce((acc, item) => (acc += item), 0): Filtrelenmiş giderleri toplar. 
*/