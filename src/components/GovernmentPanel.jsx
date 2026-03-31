import { useState } from "react"
import { useApp } from "../context/AppContext"
import GovernmentPanelUI from "../ui/GovernmentPanelUI"

export default function GovernmentPanel() {
  const { currentUser, claims, confirmGovernment, rejectClaim } = useApp()
  const [rejectReasons, setRejectReasons] = useState({})

  const pendingClaims = (claims || []).filter(
    c => c.status === "foodbank_approved"
  )

  return (
  <GovernmentPanelUI
  pendingClaims={pendingClaims}
  allClaims={claims}
  confirmGovernment={confirmGovernment}
  rejectClaim={rejectClaim}
  rejectReasons={rejectReasons}
  setRejectReasons={setRejectReasons}
/>
)
}