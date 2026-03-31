import { useApp } from "../context/AppContext"
import DashboardUI from "../ui/DashboardUI"

export default function Dashboard({ setActiveTab }) {

  const { currentUser, balances, claims, currentFTRate, usdBalances, certificates, marketListings } = useApp()

  const userName = currentUser?.name

  const myCertificates = (certificates || []).filter(
    c => c.owner === userName
  )

  const totalBurnedFT = myCertificates.reduce(
    (sum, cert) => sum + cert.burnedAmount,
    0
  )

  const estimatedFTValue =
    (balances[userName]?.available || 0) * currentFTRate

  const estimatedImpactValue =
    totalBurnedFT * currentFTRate

  let impactTier = "No Tier"

  if (totalBurnedFT >= 100) {
    impactTier = "Gold"
  } else if (totalBurnedFT >= 50) {
    impactTier = "Silver"
  } else if (totalBurnedFT >= 10) {
    impactTier = "Bronze"
  }

  let tierColor = "text-gray-500"

  if (impactTier === "Gold") {
    tierColor = "text-yellow-600"
  } else if (impactTier === "Silver") {
    tierColor = "text-gray-500"
  } else if (impactTier === "Bronze") {
    tierColor = "text-amber-700"
  }

  let tierBg = "bg-gray-100"

  if (impactTier === "Gold") {
    tierBg = "bg-yellow-100"
  } else if (impactTier === "Silver") {
    tierBg = "bg-gray-200"
  } else if (impactTier === "Bronze") {
    tierBg = "bg-amber-100"
  }

  let nextTierTarget = null

  if (impactTier === "None") {
    nextTierTarget = 10
  } else if (impactTier === "Bronze") {
    nextTierTarget = 50
  } else if (impactTier === "Silver") {
    nextTierTarget = 100
  }

  let nextTierName = null

  if (impactTier === "None") {
    nextTierName = "Bronze"
  } else if (impactTier === "Bronze") {
    nextTierName = "Silver"
  } else if (impactTier === "Silver") {
    nextTierName = "Gold"
  }

  let remainingToNextTier = null

  if (nextTierTarget !== null) {
    remainingToNextTier = nextTierTarget - totalBurnedFT
  }

  let tierProgress = 0

  if (nextTierTarget !== null) {
    tierProgress = (totalBurnedFT / nextTierTarget) * 100
    if (tierProgress > 100) tierProgress = 100
  }

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

  enterpriseImpactMap[owner] += (cert.burnedAmount || 0) * currentFTRate
})

const topImpactEnterprises = Object.entries(enterpriseImpactMap)
  .map(([enterprise, impact]) => ({
  enterprise,
  impactScore: impact
}))
  .sort((a, b) => b.impact - a.impact)
  .slice(0, 5)

  return (
    <DashboardUI
      balances={balances}
      claims={claims}
      usdBalances={usdBalances}
      currentFTRate={currentFTRate}
      userName={userName}
      myCertificates={myCertificates}
      totalBurnedFT={totalBurnedFT}
      estimatedFTValue={estimatedFTValue}
      estimatedImpactValue={estimatedImpactValue}
      impactTier={impactTier}
      tierColor={tierColor}
      tierBg={tierBg}
      nextTierName={nextTierName}
      remainingToNextTier={remainingToNextTier}
      tierProgress={tierProgress}
      globalImpactScore={globalImpactScore}
      activeFTGlobally={activeFTGlobally}
      estimatedFTImpact={estimatedFTImpact}
      mintedNFTGlobally={mintedNFTGlobally}
      nftImpactScore={nftImpactScore}
      totalDonationsApproved={totalDonationsApproved}
      totalDonationsRejected={totalDonationsRejected}
      activeDonations={activeDonations}
      topImpactEnterprises={topImpactEnterprises}
      setActiveTab={setActiveTab}
    />
  )
}