import { useApp } from "../context/AppContext"
import NavbarUI from "../ui/NavbarUI"

export default function Navbar({ setActiveTab }) {
  const { currentUser, logout } = useApp()

  return (
  <NavbarUI
    currentUser={currentUser}
    setActiveTab={setActiveTab}
    logout={logout}
  />
)
}