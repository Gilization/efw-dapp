import { useApp } from "../context/AppContext"
import NonEnterpriseDatabaseUI from "../ui/NonEnterpriseDatabaseUI"

export default function NonEnterpriseDatabase() {
  const { claims } = useApp()

  const allClaims = claims || []

  return (
    <NonEnterpriseDatabaseUI
      allClaims={allClaims}
    />
  )
}