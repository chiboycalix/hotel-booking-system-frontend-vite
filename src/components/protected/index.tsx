import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedProps {
  children: React.ReactNode
}
const Protected = ({ children }: ProtectedProps)=> {
  const token = localStorage.getItem("hotelBookSystemJWT")
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected