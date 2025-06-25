import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [category, setCategory] = useState('products') // 'products' or 'footwear'
  const [items, setItems] = useState([])

  const [formData, setFormData] = useState({
    id: '',
    ProductName: '',
    Price: '',
    image: '',
    tag: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn')
    if (isLoggedIn !== 'true') {
      navigate('/admin-login')
    }
  }, [navigate])

  // Load items based on selected category
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(category)) || []
    setItems(saved)
  }, [category])

  // Save to localStorage when items change
  useEffect(() => {
    localStorage.setItem(category, JSON.stringify(items))
  }, [items, category])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.id) {
      setItems((prev) =>
        prev.map((item) => (item.id === formData.id ? { ...formData } : item))
      )
    } else {
      const newItem = {
        ...formData,
        id: Date.now().toString(),
      }
      setItems((prev) => [...prev, newItem])
    }
    setFormData({ id: '', ProductName: '', Price: '', image: '', tag: '' })
  }

  const handleEdit = (item) => {
    setFormData(item)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn')
    navigate('/admin-login')
  }

  return (
    <div className='container py-4'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h2>Admin Dashboard</h2>
        <button
          className='btn btn-outline-danger btn-sm'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className='mb-4'>
        <label className='form-label fw-bold'>Select Item Type:</label>
        <select
          className='form-select'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='products'>Products</option>
          <option value='footwear'>Footwear</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='row g-3'>
          <div className='col-md-4'>
            <input
              type='text'
              name='ProductName'
              className='form-control'
              placeholder='Product Name'
              value={formData.ProductName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-md-3'>
            <input
              type='text'
              name='Price'
              className='form-control'
              placeholder='Price (₦)'
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-md-3'>
            <input
              type='text'
              name='tag'
              className='form-control'
              placeholder='Tag (New, Sale...)'
              value={formData.tag}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <input
              type='file'
              accept='image/*'
              className='form-control'
              onChange={(e) => {
                const file = e.target.files[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onloadend = () => {
                    setFormData({ ...formData, image: reader.result })
                  }
                  reader.readAsDataURL(file)
                }
              }}
              required={!formData.id}
            />

            {formData.image && (
              <img
                src={formData.image}
                alt='Preview'
                className='img-fluid mt-2 rounded'
                style={{ maxHeight: '150px' }}
              />
            )}
          </div>
          <div className='col-md-12'>
            <button type='submit' className='btn btn-primary'>
              {formData.id ? 'Update Item' : 'Add Item'}
            </button>
          </div>
        </div>
      </form>

      <h4 className='mt-5'>
        All {category === 'products' ? 'Products' : 'Footwear'}
      </h4>
      <div className='row g-4'>
        {items.map((item) => (
          <div className='col-md-4' key={item.id}>
            <div className='card h-100 shadow-sm'>
              <img
                src={item.image}
                alt={item.ProductName}
                className='card-img-top'
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.ProductName}</h5>
                <p className='card-text'>₦{item.Price}</p>
                {item.tag && (
                  <span className='badge bg-info mb-2'>{item.tag}</span>
                )}
                <div className='d-flex justify-content-between'>
                  <button
                    className='btn btn-sm btn-warning'
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard
