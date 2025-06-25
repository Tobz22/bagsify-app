import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const correctPassword = 'admin123'

  console.log('✅ Admin Login Page Loaded') // This should show in browser console

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === correctPassword) {
      sessionStorage.setItem('isAdminLoggedIn', 'true')
      navigate('/admin')
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <div className='container py-5 min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-md-5'>
        <div className='card p-4 shadow-sm'>
          <h3 className='text-center mb-4'>Admin Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type='password'
              placeholder='Enter admin password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control mb-3'
              required
            />
            <button className='btn btn-primary w-100'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
