import { useApp } from "../context/AppContext"
import TokenMakerPanelUI from "../ui/TokenMakerPanelUI"

export default function TokenMakerPanel() {
  const { claims, mintClaim } = useApp()

  const readyToMint = (claims || []).filter(
    c => c.status === "mint_ready"
  )

  return (
  <TokenMakerPanelUI
    readyToMint={readyToMint}
    allClaims={claims}
    mintClaim={mintClaim}
  />
)
}