import '../global.css'
import { useEffect, useState } from 'react';
import BasicTable from '../components/Table/Table'
import { Container } from '@mui/material'
import Form from '../components/Form/form'
import Header from '../components/Header/header'
import Resume from '../components/Resume/resume';




const Home = () => {
  const data = localStorage.getItem("transactions")
  const [transactionList , setTransactionList] = useState(data ? JSON.parse(data):[])
  const [income, setIncome] = useState<string>(" ")
  const [expense, setExpense] = useState<string>(" ")
  const [total, setTotal] = useState<string>(" ")
  
  useEffect(()=>{
    const amountExpense = transactionList
    .filter((item:any)=>item.expense)
    .map((transaction:any)=>Number(transaction.amount))

    const amountIncome = transactionList
    .filter((item:any)=>!item.expense)
    .map((transaction:any)=>Number(transaction.amount))

    const income = amountIncome.reduce((acc:number,cur:number)=>acc + cur,0).toFixed(2)
    const expense = amountExpense.reduce((acc:number,cur:number)=>acc + cur,0).toFixed(2)
    const total = (income-expense).toFixed(2)

    setExpense(`R$ ${expense}`)
    setIncome(`R$ ${income}`)
    setTotal(`R$ ${total}`)
  },[transactionList])

  const handleAdd = ((transaction:any)=>{
    const newArrayTransaction = [...transactionList, transaction]

    setTransactionList(newArrayTransaction)
    localStorage.setItem("transactions",JSON.stringify(newArrayTransaction))
  })

  return (
    <>
    <Header/>
    <Container maxWidth="lg" style={{padding:'1em'}}>
      <Resume income={income} expense={expense} total={total}/>
      <Form handleAdd={handleAdd} />
      
      <BasicTable  itens={transactionList} setItens={setTransactionList}/>
    </Container>
    </>
  )
}

export default Home


