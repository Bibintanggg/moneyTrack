import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Outcome from './pages/Outcome'
import Information from './pages/Information'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pemasukan" element={<Income />} />
        <Route path="/pengeluaran" element={<Outcome />} />
        <Route path="/informasi" element={<Information />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  )
}

export default App
