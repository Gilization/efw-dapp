  import { useState } from "react"
  import { useApp } from "../context/AppContext"
  import EnterpriseClaimsUI from "../ui/EnterpriseClaimsUI"

  export default function EnterpriseClaims() {
    const { currentUser, claims, submitClaim, usdBalances, currentFTRate } = useApp()

    const [foodBank, setFoodBank] = useState("FoodBank-A")
    const [evidence, setEvidence] = useState("")
    const [donationType, setDonationType] = useState("")
    const [faceValue, setFaceValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const contributionFee = faceValue
  ? (Number(faceValue) * Number(currentFTRate) * 0.025).toFixed(2)
  : 0

  const estimatedDonationValue = faceValue
  ? (Number(faceValue) * Number(currentFTRate)).toFixed(2)
  : 0

    const myClaims = claims.filter(
      c => c.enterprise === currentUser.name
    )

    const handleSubmit = () => {
      if (!evidence || !donationType || !faceValue) {
  setErrorMessage("Please complete all claim fields before submitting.")
  return
}
    
    const fee = Number(contributionFee)
const userUSD = usdBalances[currentUser.name] || 0

if (userUSD < fee) {
  setErrorMessage("Insufficient USD balance to cover the contribution fee.")
  return
}

      submitClaim({
        foodBank,
        evidence,
        donationType,
        faceValue,
        contributionFee: Number(contributionFee),
        estimatedDonationValue: Number(estimatedDonationValue)
      })

      setErrorMessage("")

      setEvidence("")
      setDonationType("")
      setFaceValue("")
    }

    return (
  <EnterpriseClaimsUI
    foodBank={foodBank}
    setFoodBank={setFoodBank}
    donationType={donationType}
    setDonationType={setDonationType}
    evidence={evidence}
    setEvidence={setEvidence}
    faceValue={faceValue}
    setFaceValue={setFaceValue}
    contributionFee={contributionFee}
    estimatedDonationValue={estimatedDonationValue}
    errorMessage={errorMessage}
    handleSubmit={handleSubmit}
    myClaims={myClaims}
  />
)
  }