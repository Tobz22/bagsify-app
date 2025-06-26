import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      sessionStorage.setItem('isAdminLoggedIn', 'true')
      navigate('/admin')
    } catch (err) {
      alert('Login failed. Check your credentials.')
    }
  }

  return (
    <div className='container py-5 d-flex justify-content-center'>
      <div className='card p-4 shadow-sm'>
        <h3 className='text-center mb-4'>Admin Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type='email'
            className='form-control mb-2'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            className='form-control mb-3'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='btn btn-primary w-100'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
