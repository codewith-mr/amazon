import React, { createContext, useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { dispatchisAuth } from "../redux/slices/userSlice"

const AppContext = createContext()

export function useApp() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(dispatchisAuth(true))
  }

  const handleLogout = () => {
    dispatch(dispatchisAuth(false))
  }

  return (
    <AppContext.Provider
      value={{
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
