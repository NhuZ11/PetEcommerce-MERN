import React from 'react'
import AddProduct from './AddProduct'
import AddCategory from './AddCategory'

const AdminDashboard = () => {
  return (
    <div>
      <h1 className='text-center font-style'>Admin Dashboard</h1>
      <AddCategory />
      <AddProduct />
    </div>
  )
}

export default AdminDashboard
