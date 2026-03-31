import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()
console.log("APP CONTEXT LOADED - NFT VERSION")

export function AppProvider({ children }) {
  const [users] = useState([
    { name: "FNB-A", password: "123", role: "enterprise" },
    { name: "FNB-B", password: "123", role: "enterprise" },
    { name: "FoodBank-A", password: "123", role: "foodbank" },
    { name: "FoodBank-B", password: "123", role: "foodbank" },
    { name: "Government", password: "123", role: "government" },
    { name: "Validator", password: "123", role: "validator" },
    { name: "TokenMaker", password: "123", role: "tokenmaker" },
  ])

  const [currentUser, setCurrentUser] = useState(() => {
  const stored = localStorage.getItem("efw_user")
  return stored ? JSON.parse(stored) : null
})

  const [balances, setBalances] = useState(() => {
  const stored = localStorage.getItem("efw_balances")
  return stored
    ? JSON.parse(stored)
    : {
        "FNB-A": { available: 100, locked: 0 },
        "FNB-B": { available: 50, locked: 0 },
      }
})

const [usdBalances, setUsdBalances] = useState(() => {
  const stored = localStorage.getItem("efw_usd_balances")
  return stored
    ? JSON.parse(stored)
    : {
        "FNB-A": 100,
        "FNB-B": 50
      }
})

const [currentFTRate] = useState(1)

  const [marketListings, setMarketListings] = useState(() => {
  try {
    const stored = localStorage.getItem("efw_listings")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})
  const [transactions, setTransactions] = useState(() => {
  try {
    const stored = localStorage.getItem("efw_transactions")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})
  const [claims, setClaims] = useState(() => {
  try {
    const stored = localStorage.getItem("efw_claims")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})

const [certificates, setCertificates] = useState(() => {
  try {
    const stored = localStorage.getItem("efw_certificates")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})

const [deposits, setDeposits] = useState(() => {
  try {
    const stored = localStorage.getItem("efw_deposits")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})

  // ========================
  // PERSISTENCE
  // ========================

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("efw_user", JSON.stringify(currentUser))
    }
  }, [currentUser])

  useEffect(() => {
    localStorage.setItem("efw_balances", JSON.stringify(balances))
  }, [balances])

  useEffect(() => {
  localStorage.setItem("efw_usd_balances", JSON.stringify(usdBalances))
}, [usdBalances])

  useEffect(() => {
    localStorage.setItem("efw_listings", JSON.stringify(marketListings))
  }, [marketListings])

  useEffect(() => {
    localStorage.setItem("efw_transactions", JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    localStorage.setItem("efw_claims", JSON.stringify(claims))
  }, [claims])

  useEffect(() => {
  localStorage.setItem("efw_certificates", JSON.stringify(certificates))
}, [certificates])

  useEffect(() => {
  localStorage.setItem("efw_deposits", JSON.stringify(deposits))
}, [deposits])
// ========================
// DONATION ID GENERATOR
// ========================

const generateDonationId = () => {
  const year = new Date().getFullYear()
  let number
  let id

  do {
    number = Math.floor(100000 + Math.random() * 900000)
    id = `EFW-${year}-${number}`
  } while (claims.some(c => c.donationId === id))

  return id
}

const generateCertificateId = () => {
  let id
  do {
    id = Math.floor(100000 + Math.random() * 900000)
  } while (certificates.some(c => c.id === id))
  return id
}
  // ========================
  // AUTH
  // ========================

  const login = (name, password) => {
    const found = users.find(
      u => u.name === name && u.password === password
    )
    if (!found) return false
    setCurrentUser(found)
    return true
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("efw_user")
  }

// ========================
// CLAIM WORKFLOW
// ========================

const submitClaim = (data) => {
  if (!currentUser) return

  const newClaim = {
    id: Date.now(),
    enterprise: currentUser.name,
    foodBank: data.foodBank,
    evidence: data.evidence,
    donationType: data.donationType,
    faceValue: Number(data.faceValue),
    contributionFee: Number(data.contributionFee),
    estimatedDonationValue: Number(data.estimatedDonationValue),
    donationId: generateDonationId(),
    status: "submitted",
    history: [
      {
        role: "enterprise",
        name: currentUser.name,
        action: "submitted",
        timestamp: new Date().toLocaleString(),
      }
    ]
  }

  setClaims(prev => [...prev, newClaim])
  setUsdBalances(prev => ({
  ...prev,
  [currentUser.name]:
    (prev[currentUser.name] || 0) - Number(data.contributionFee)
}))
}

const rejectClaim = (claimId, reason) => {

  const claim = claims.find(c => c.id === claimId)
  if (!claim) return

  setClaims(prev =>
    prev.map(c =>
      c.id === claimId
        ? {
            ...c,
            status: "rejected",
            history: [
              ...c.history,
              {
                role: currentUser.role,
                name: currentUser.name,
                action: "rejected",
                reason,
                timestamp: new Date().toLocaleString(),
              }
            ]
          }
        : c
    )
  )

  setUsdBalances(prev => ({
    ...prev,
    [claim.enterprise]:
      (prev[claim.enterprise] || 0) + Number(claim.contributionFee)
  }))
}

const approveFoodBank = (claimId) => {
const claim = claims.find(c => c.id === claimId)
if (!claim) return
  setClaims(prev =>
    prev.map(claim =>
      claim.id === claimId
        ? {
            ...claim,
            status: "foodbank_approved",
            history: [
              ...claim.history,
              {
                role: "foodbank",
                name: currentUser.name,
                action: "approved",
                timestamp: new Date().toLocaleString(),
              }
            ]
          }
        : claim
    )
    )

  setUsdBalances(prev => ({
    ...prev,
    [claim.foodBank]:
      (prev[claim.foodBank] || 0) + Number(claim.contributionFee)
  }))
}

const confirmGovernment = (claimId) => {
  setClaims(prev =>
    prev.map(claim =>
      claim.id === claimId
        ? {
            ...claim,
            status: "government_confirmed",
            history: [
              ...claim.history,
              {
                role: "government",
                name: currentUser.name,
                action: "confirmed",
                timestamp: new Date().toLocaleString(),
              }
            ]
          }
          
        : claim
    )
    
  )
}

const verifyValidator = (claimId) => {
  setClaims(prev =>
    prev.map(claim =>
      claim.id === claimId
        ? {
            ...claim,
            status: "mint_ready",
            history: [
              ...claim.history,
              {
                role: "validator",
                name: currentUser.name,
                action: "verified",
                timestamp: new Date().toLocaleString(),
              }
            ]
          }
        : claim
    )
  )
}

const mintClaim = (claimId) => {
  const claim = claims.find(c => c.id === claimId)
  if (!claim) return

  setBalances(prev => ({
    ...prev,
    [claim.enterprise]: {
      available:
        (prev[claim.enterprise]?.available || 0) +
        claim.faceValue,
      locked: prev[claim.enterprise]?.locked || 0
    }
  }))

  setClaims(prev =>
    prev.map(c =>
      c.id === claimId
        ? {
            ...c,
            status: "minted",
            history: [
              ...c.history,
              {
                role: "tokenmaker",
                name: currentUser.name,
                action: "minted",
                timestamp: new Date().toLocaleString(),
              }
            ]
          }
        : c
    )
  )
}

// ========================
// NFT CERTIFICATE
// ========================

const burnAndMintCertificate = (amount, template) => {
  if (!currentUser) return

  const userBalance = balances[currentUser.name]
  if (!userBalance) return
  if (amount <= 0) return
  if (amount > userBalance.available) return

  // Burn FT
  setBalances(prev => ({
    ...prev,
    [currentUser.name]: {
      available: prev[currentUser.name].available - amount,
      locked: prev[currentUser.name].locked,
    }
  }))

  // Mint NFT
  const newCertificate = {
    id: generateCertificateId(),
    owner: currentUser.name,
    burnedAmount: amount,
    template,
    createdAt: new Date().toLocaleString(),
  }

  setCertificates(prev => [...prev, newCertificate])
}

  // ========================
  // MARKETPLACE
  // ========================

  const createListing = (amount) => {
    if (!currentUser) return

    const userBalance = balances[currentUser.name]
    if (!userBalance || userBalance.available < amount) return

    // LOCK
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
      status: "open",
      createdAt: new Date().toLocaleString(),
    }

    setMarketListings(prev => [...prev, newListing])
  }

  const buyListing = (listing) => {
    if (!currentUser) return
    if (listing.status !== "open") return

    const seller = listing.seller

    setBalances(prev => ({
      ...prev,
      [seller]: {
        available: prev[seller].available,
        locked: prev[seller].locked - listing.amount,
      },
      [currentUser.name]: {
        available:
          (prev[currentUser.name]?.available || 0) +
          listing.amount,
        locked: prev[currentUser.name]?.locked || 0,
      }
    }))

    setMarketListings(prev =>
      prev.map(l =>
        l.id === listing.id ? { ...l, status: "sold" } : l
      )
    )

    const newTx = {
      id: Date.now(),
      seller,
      buyer: currentUser.name,
      amount: listing.amount,
      timestamp: new Date().toLocaleString(),
    }

    setTransactions(prev => [...prev, newTx])
  }

  const cancelListing = (listing) => {
    if (!currentUser) return
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
        l.id === listing.id ? { ...l, status: "cancelled" } : l
      )
    )
  }

  const withdrawUSD = (foodBank, amount, bank, accountNumber) => {
  const value = Number(amount)

  if (!foodBank) return
  if (!value || value <= 0) return

  const balance = usdBalances[foodBank] || 0
  if (value > balance) return

  setUsdBalances(prev => ({
    ...prev,
    [foodBank]: prev[foodBank] - value
  }))

  const newWithdrawal = {
    id: Date.now(),
    foodBank,
    amount: value,
    bank,
    accountNumber,
    timestamp: new Date().toLocaleString()
  }

  setDeposits(prev => [...prev, newWithdrawal])
}

const getClaimStatusLabel = (status) => {
  switch (status) {
    case "submitted":
      return "Claim Submitted"
    case "foodbank_approved":
      return "FoodBank Approved"
    case "government_confirmed":
      return "Government Approved"
    case "mint_ready":
      return "Donation ID Validated"
    case "minted":
      return "Token Minted"
    case "rejected":
      return "Rejected"
    default:
      return "Unknown"
  }
}

  return (
    <AppContext.Provider
      value={{
        currentUser,
        login,
        logout,

        balances,
        setBalances,

        usdBalances,
        setUsdBalances,

        currentFTRate,

        marketListings,
        setMarketListings,

        transactions,
        setTransactions,

        createListing,
        buyListing,
        cancelListing,

        claims,
        setClaims,
        submitClaim,
        rejectClaim,
        approveFoodBank,
        confirmGovernment,
        verifyValidator,
        mintClaim,
        
        certificates,
        burnAndMintCertificate,

        deposits,
        setDeposits,
        withdrawUSD,
        getClaimStatusLabel,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}