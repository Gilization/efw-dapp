import { useState } from "react"
import { useApp } from "./context/AppContext"
import Navbar from "./components/Navbar"
import LoginPage from "./components/LoginPage"
import Trade from "./components/Trade"
import EnterpriseClaims from "./components/EnterpriseClaims"
import FoodBankPanel from "./components/FoodBankPanel"
import FoodBankWithdraw from "./components/FoodBankWithdraw"
import GovernmentPanel from "./components/GovernmentPanel"
import ValidatorPanel from "./components/ValidatorPanel"
import TokenMakerPanel from "./components/TokenMakerPanel"
import Certificates from "./components/Certificates"
import Deposit from "./components/Deposit"
import Dashboard from "./components/Dashboard"
import NonEnterpriseDashboard from "./components/NonEnterpriseDashboard"
import NonEnterpriseDatabase from "./components/NonEnterpriseDatabase"

export default function App() {
  const { currentUser } = useApp()
  const [activeTab, setActiveTab] = useState("dashboard")

  if (!currentUser) {
    return <LoginPage />
  }

  const renderContent = () => {
    // Admin roles handled later
    if (currentUser.role === "foodbank") {

  if (activeTab === "database") {
    return <NonEnterpriseDatabase />
  }

  if (activeTab === "dashboard") {
    return <NonEnterpriseDashboard />
  }

  if (activeTab === "withdraw") {
    return <FoodBankWithdraw />
  }

  return <FoodBankPanel />
}

if (currentUser.role === "validator") {

if (activeTab === "database") {
    return <NonEnterpriseDatabase />
  }

  if (activeTab === "dashboard") {
    return <NonEnterpriseDashboard />
  }

  return <ValidatorPanel />
}

if (currentUser.role === "tokenmaker") {

if (activeTab === "database") {
    return <NonEnterpriseDatabase />
  }

  if (activeTab === "dashboard") {
    return <NonEnterpriseDashboard />
  }

  return <TokenMakerPanel />
}

if (currentUser.role === "government") {

if (activeTab === "database") {
    return <NonEnterpriseDatabase />
  }

  if (activeTab === "dashboard") {
    return <NonEnterpriseDashboard />
  }

  return <GovernmentPanel />
}

    switch (activeTab) {
      case "dashboard":
  return <Dashboard setActiveTab={setActiveTab} />

            case "trade":
        return <Trade />

        case "deposit":
  return <Deposit />

      case "claims":
        return <EnterpriseClaims />

      case "certificates":
  return <Certificates />

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9F4]">
      <Navbar setActiveTab={setActiveTab} />
      <main className="p-10">{renderContent()}</main>
    </div>
  )
}