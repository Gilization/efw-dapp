import { useApp } from "../context/AppContext"
import NonEnterpriseDashboardUI from "../ui/NonEnterpriseDashboardUI"

export default function NonEnterpriseDashboard() {

  const {
    claims,
    balances,
    usdBalances,
    certificates,
    marketListings,
    currentFTRate
  } = useApp()

const activeFTInBalances = Object.values(balances).reduce(
  (sum, b) => sum + (b.available || 0) + (b.locked || 0),
  0
)

const activeFTInMarket = marketListings
  .filter(l => l.status === "open")
  .reduce((sum, l) => sum + l.amount, 0)

const activeFTGlobally =
  activeFTInBalances + activeFTInMarket

const estimatedFTImpact =
  activeFTGlobally * currentFTRate

  const mintedNFTGlobally = certificates.length

const nftImpactScore = certificates.reduce(
  (sum, cert) => sum + (cert.burnedAmount || 0),
  0
)

const totalDonationsApproved = claims.filter(
  c => c.status === "minted"
).length

const totalDonationsRejected = claims.filter(
  c => c.status === "rejected"
).length

const activeDonations = claims.filter(
  c =>
    c.status !== "rejected" &&
    c.status !== "minted"
).length

const globalImpactScore =
  nftImpactScore + estimatedFTImpact

  const enterpriseImpactMap = {}

certificates.forEach(cert => {
  const owner = cert.owner

  if (!enterpriseImpactMap[owner]) {
    enterpriseImpactMap[owner] = 0
  }

  enterpriseImpactMap[owner] += cert.burnedAmount || 0
})

const topImpactEnterprises = Object.entries(enterpriseImpactMap)
  .map(([enterprise, impact]) => ({
    enterprise,
    impact
  }))
  .sort((a, b) => b.impact - a.impact)
  .slice(0, 5)

  return (
    <NonEnterpriseDashboardUI
      claims={claims}
      balances={balances}
      usdBalances={usdBalances}
      certificates={certificates}
      marketListings={marketListings}
      currentFTRate={currentFTRate}
      globalImpactScore={globalImpactScore}
      activeFTGlobally={activeFTGlobally}
      estimatedFTImpact={estimatedFTImpact}
      mintedNFTGlobally={mintedNFTGlobally}
      nftImpactScore={nftImpactScore}
      totalDonationsApproved={totalDonationsApproved}
      totalDonationsRejected={totalDonationsRejected}
      activeDonations={activeDonations}
      topImpactEnterprises={topImpactEnterprises}
    />
  )
}