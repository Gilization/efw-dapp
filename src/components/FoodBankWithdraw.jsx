import { useState } from "react"
import { useApp } from "../context/AppContext"
import FoodBankWithdrawUI from "../ui/FoodBankWithdrawUI"

export default function FoodBankWithdraw() {

  const { currentUser, usdBalances, withdrawUSD, deposits } = useApp()

  const [amount, setAmount] = useState("")
  const [account, setAccount] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [error, setError] = useState("")

  const balance = usdBalances[currentUser.name] || 0

  const myWithdrawals = deposits.filter(
  w => w.foodBank === currentUser.name
)

  const handleWithdraw = () => {

    if (!amount || !account) {
      setError("Please complete all withdrawal fields.")
      return
    }

    const value = Number(amount)

    if (value > balance) {
      setError("Withdrawal amount exceeds available balance.")
      return
    }

    const destination = `${account} - ${accountNumber}`

withdrawUSD(
  currentUser.name,
  value,
  account,
  accountNumber
)

    setAmount("")
setAccount("")
setAccountNumber("")
setError("")
  }

  return (
    <FoodBankWithdrawUI
      balance={balance}
      amount={amount}
      setAmount={setAmount}
      account={account}
      setAccount={setAccount}
      accountNumber={accountNumber}
      setAccountNumber={setAccountNumber}
      error={error}
      handleWithdraw={handleWithdraw}
      withdrawals={myWithdrawals}
    />
  )
}