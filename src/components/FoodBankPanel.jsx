import { useState } from "react"
import { useApp } from "../context/AppContext"
import FoodBankPanelUI from "../ui/FoodBankPanelUI"

export default function FoodBankPanel({ setActiveTab }) {
  const { currentUser, claims, approveFoodBank, rejectClaim, usdBalances } = useApp()
  const [rejectReasons, setRejectReasons] = useState({})

  const myClaims = (claims || []).filter(
    c =>
      c.foodBank === currentUser.name &&
      c.status === "submitted"
  )

  const approvedClaims = (claims || []).filter(
  c =>
    c.foodBank === currentUser.name &&
    c.status !== "submitted" &&
    c.contributionFee
)

  return (
  <FoodBankPanelUI
  myClaims={myClaims}
  approvedClaims={approvedClaims}
  usdBalance={usdBalances[currentUser.name] || 0}
  approveFoodBank={approveFoodBank}
  rejectClaim={rejectClaim}
  rejectReasons={rejectReasons}
  setRejectReasons={setRejectReasons}
  setActiveTab={setActiveTab}
/>
)
}