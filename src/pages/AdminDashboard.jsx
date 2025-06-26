import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db, storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

function AdminDashboard() {
  const [category, setCategory] = useState('products')
  const [items, setItems] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    ProductName: '',
    Price: '',
    image: '',
    tag: '',
  })
  const [file, setFile] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn')
    if (isLoggedIn !== 'true') navigate('/admin-login')
  }, [navigate])

  const fetchItems = async () => {
    const snapshot = await getDocs(collection(db, category))
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setItems(list)
  }

  useEffect(() => {
    fetchItems()
  }, [category])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageUpload = async () => {
    if (!file) return formData.image
    const fileRef = ref(storage, `${category}/${file.name}`)
    await uploadBytes(fileRef, file)
    return await getDownloadURL(fileRef)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const imageUrl = await handleImageUpload()

    if (formData.id) {
      const docRef = doc(db, category, formData.id)
      await updateDoc(docRef, { ...formData, image: imageUrl })
    } else {
      await addDoc(collection(db, category), { ...formData, image: imageUrl })
    }

    setFormData({ id: '', ProductName: '', Price: '', image: '', tag: '' })
    setFile(null)
    fetchItems()
  }

  const handleEdit = (item) => {
    setFormData(item)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deleteDoc(doc(db, category, id))
      fetchItems()
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
        <button className='btn btn-outline-danger' onClick={handleLogout}>
          Logout
        </button>
      </div>

      <select
        className='form-select mb-4'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value='products'>Bags</option>
        <option value='footwear'>Footwear</option>
      </select>

      <form onSubmit={handleSubmit} className='row g-3 mb-5'>
        <div className='col-md-4'>
          <input
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
            onChange={(e) => setFile(e.target.files[0])}
          />
          {formData.image && (
            <img
              src={formData.image}
              alt='Preview'
              className='img-fluid mt-2'
              style={{ maxHeight: '150px' }}
            />
          )}
        </div>
        <div className='col-md-12'>
          <button className='btn btn-primary'>
            {formData.id ? 'Update' : 'Add'} Item
          </button>
        </div>
      </form>

      <h4 className='mb-3'>All {category}</h4>
      <div className='row g-4'>
        {items.map((item) => (
          <div className='col-md-4' key={item.id}>
            <div className='card h-100 shadow-sm'>
              <img
                src={item.image}
                className='card-img-top'
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5>{item.ProductName}</h5>
                <p>₦{item.Price}</p>
                {item.tag && <span className='badge bg-info'>{item.tag}</span>}
                <div className='d-flex justify-content-between mt-3'>
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
