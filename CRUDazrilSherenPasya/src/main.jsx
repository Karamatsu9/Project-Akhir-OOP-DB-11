import { createRoot } from 'react-dom/client'
import Crud from './Crud.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<Crud />} />
      </Routes>
    </Router> 
)