import { useState } from "react"
import { useApp } from "../context/AppContext"
import ValidatorPanelUI from "../ui/ValidatorPanelUI"

export default function ValidatorPanel() {
  const { claims, verifyValidator, rejectClaim } = useApp()
  const [rejectReasons, setRejectReasons] = useState({})

  const pendingClaims = (claims || []).filter(
    c => c.status === "government_confirmed"
  )

  return (
  <ValidatorPanelUI
  pendingClaims={pendingClaims}
  allClaims={claims}
  verifyValidator={verifyValidator}
  rejectClaim={rejectClaim}
  rejectReasons={rejectReasons}
  setRejectReasons={setRejectReasons}
/>
)
}