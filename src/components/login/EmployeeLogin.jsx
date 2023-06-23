import React from 'react'
import { LoginForm } from './Login'

export default function EmployeeLogin() {
  return (
    <div className='max-w-md mx-auto mt-36'>
      <LoginForm type={'employee'} />
    </div>
  )
}
