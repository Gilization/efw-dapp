import { useState } from "react"
import { useApp } from "../context/AppContext"
import TradeUI from "../ui/TradeUI"

export default function Trade() {
const [activeMarketTab, setActiveMarketTab] = useState("open")
  const {
  currentUser,
  balances,
  setBalances,
  usdBalances,
  setUsdBalances,
  marketListings,
  setMarketListings,
  transactions,
  setTransactions,
} = useApp()

  const [sellAmount, setSellAmount] = useState(0)
  const [pricePerFT, setPricePerFT] = useState("")

  const myBalance =
    balances[currentUser.name]?.available || 0

  const handleSell = () => {
  const amount = Number(sellAmount)
  if (amount <= 0) return
  if (amount > myBalance) return
  
  const price = Number(pricePerFT)
  if (price <= 0) return

  setBalances(prev => ({
    ...prev,
    [currentUser.name]: {
      available: prev[currentUser.name].available - amount,
      locked: prev[currentUser.name].locked + amount,
    }
  }))

  const newListing = {
    id: Date.now(),
    seller: currentUser.name,
    amount,
    pricePerFT: price,
    status: "open",
    createdAt: new Date().toLocaleString(),
  }

  setMarketListings(prev => [...prev, newListing])
  setSellAmount(0)
}

const handleBuy = (listing) => {
  if (listing.seller === currentUser.name) return
  if (listing.status !== "open") return

  const totalUSD = listing.amount * listing.pricePerFT
  const buyerUSD = usdBalances[currentUser.name] || 0
  if (buyerUSD < totalUSD) return

  const sellerLocked =
    balances[listing.seller]?.locked || 0

  if (sellerLocked < listing.amount) return

  setBalances(prev => ({
    ...prev,
    [listing.seller]: {
      available: prev[listing.seller].available,
      locked: prev[listing.seller].locked - listing.amount,
    },
    [currentUser.name]: {
      available:
        (prev[currentUser.name]?.available || 0) +
        listing.amount,
      locked: prev[currentUser.name]?.locked || 0,
    }
  }))

  setUsdBalances(prev => ({
  ...prev,
  [currentUser.name]: prev[currentUser.name] - totalUSD,
  [listing.seller]: (prev[listing.seller] || 0) + totalUSD
}))

  setMarketListings(prev =>
    prev.map(l =>
      l.id === listing.id ? { ...l, status: "sold" } : l
    )
  )


const newTransaction = {
  id: Date.now(),
  seller: listing.seller,
  buyer: currentUser.name,
  amount: listing.amount,
  pricePerFT: listing.pricePerFT,
  totalUSD: totalUSD,
  timestamp: new Date().toLocaleString(),
}

  setTransactions(prev => [...prev, newTransaction])
}

const handleCancel = (listing) => {
  if (listing.seller !== currentUser.name) return
  if (listing.status !== "open") return

  setBalances(prev => ({
    ...prev,
    [currentUser.name]: {
      available:
        prev[currentUser.name].available + listing.amount,
      locked:
        prev[currentUser.name].locked - listing.amount,
    }
  }))

  setMarketListings(prev =>
    prev.map(l =>
      l.id === listing.id
        ? { ...l, status: "cancelled" }
        : l
    )
  )
}

  return (
  <TradeUI
    currentUser={currentUser}
    balances={balances}
    usdBalances={usdBalances}
    marketListings={marketListings}
    transactions={transactions}
    sellAmount={sellAmount}
    setSellAmount={setSellAmount}
    pricePerFT={pricePerFT}
    setPricePerFT={setPricePerFT}
    activeMarketTab={activeMarketTab}
    setActiveMarketTab={setActiveMarketTab}
    handleSell={handleSell}
    handleBuy={handleBuy}
    handleCancel={handleCancel}
  />
)
}