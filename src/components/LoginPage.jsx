import { useState } from "react"
import { useApp } from "../context/AppContext"
import LoginPageUI from "../ui/LoginPageUI"

export default function LoginPage() {
  const { login, register } = useApp()

  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    setError("")

    if (!name || !password) {
      setError("All fields are required.")
      return
    }

    if (isRegister) {
      const success = register(name, password)
      if (!success) {
        setError("User already exists.")
        return
      }
      const loggedIn = login(name, password)
      if (!loggedIn) {
        setError("Registration failed.")
      }
    } else {
      const success = login(name, password)
      if (!success) {
        setError("Invalid username or password.")
      }
    }
  }

  return (
  <LoginPageUI
    isRegister={isRegister}
    setIsRegister={setIsRegister}

    name={name}
    setName={setName}

    password={password}
    setPassword={setPassword}

    error={error}
    setError={setError}

    handleSubmit={handleSubmit}
  />
)
}