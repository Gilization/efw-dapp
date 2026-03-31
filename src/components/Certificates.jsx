    import { useState } from "react"
    import { useApp } from "../context/AppContext.jsx"
    import CertificatesUI from "../ui/CertificatesUI"

    export default function Certificates() {
    const ctx = useApp()
    console.log("FULL CTX:", ctx)

    const { currentUser, balances, burnAndMintCertificate, certificates, currentFTRate } = ctx
    console.log("TYPE:", typeof burnAndMintCertificate)

    const [amount, setAmount] = useState("")
    const [template, setTemplate] = useState("gold")
    const [searchId, setSearchId] = useState("")

    const available = balances[currentUser.name]?.available || 0

    const searchedCertificate =
  certificates.find(c => String(c.id) === String(searchId))

    const handleMint = () => {
  console.log("CLICKED")

  const burnAmount = Number(amount)
  if (!burnAmount) return

  burnAndMintCertificate(burnAmount, template)

  console.log("CERTIFICATES AFTER MINT:", certificates)

  setAmount("")
}

    return (
  <CertificatesUI
    currentUser={currentUser}
    certificates={certificates}
    balances={balances}
    currentFTRate={currentFTRate}

    amount={amount}
    setAmount={setAmount}
    template={template}
    setTemplate={setTemplate}
    handleMint={handleMint}

    searchId={searchId}
    setSearchId={setSearchId}
    searchedCertificate={searchedCertificate}

    available={available}
  />
)
    }