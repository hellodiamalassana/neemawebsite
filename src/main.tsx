import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import APropos from './pages/A-Propos'
import Offre from './pages/Offre'
import Projets from './pages/Projets'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AuditConception from './pages/Audit-conception'
import Developpementdesplateformes from './pages/softwaredeveloppement'
import AnalyseDesign from './pages/Analysedesign'
import Objetsconnectés from './pages/Objetsconnectés'


import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-[#292B00]  font-averta h-full container   overflow-x-hidden px-5  '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/A-Propos' element={<APropos />} />
          <Route path='/Offre' element={<Offre />} />
          <Route path='/Projets' element={<Projets />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/AuditConception' element={<AuditConception />} />
          <Route path='/Developpementdesplateformes' element={<Developpementdesplateformes />} />
          <Route path='/Analysedesign' element={<AnalyseDesign />} />
          <Route path='/Objetsconnectés' element={<Objetsconnectés />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)


