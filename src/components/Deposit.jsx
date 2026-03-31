import { useState } from "react"
import { useApp } from "../context/AppContext"
import DepositUI from "../ui/DepositUI"

export default function Deposit() {

  const { currentUser, setUsdBalances, setDeposits } = useApp()

  const [amount, setAmount] = useState("")
  const [bank, setBank] = useState("BCA")

  const [virtualAccount, setVirtualAccount] = useState(null)
const [evidence, setEvidence] = useState(null)

const generateVirtualAccount = () => {
  const depositAmount = Number(amount)
  if (!depositAmount) return

  const va = "88" + Math.floor(100000000 + Math.random() * 900000000)

  setVirtualAccount(va)
}

  const handleDeposit = () => {

    const depositAmount = Number(amount)
    if (!depositAmount) return

    const newDeposit = {
      id: Date.now(),
      enterprise: currentUser.name,
      amount: depositAmount,
      bank,
      createdAt: new Date().toLocaleString(),
    }

    setDeposits(prev => [...prev, newDeposit])

    setUsdBalances(prev => ({
      ...prev,
      [currentUser.name]: (prev[currentUser.name] || 0) + depositAmount
    }))

    setAmount("")
  }

  return (
  <DepositUI
    amount={amount}
    setAmount={setAmount}

    bank={bank}
    setBank={setBank}

    generateVirtualAccount={generateVirtualAccount}
    virtualAccount={virtualAccount}

    evidence={evidence}
    setEvidence={setEvidence}

    handleDeposit={handleDeposit}
  />
)
}