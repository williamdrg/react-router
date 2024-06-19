
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPages from './pages/loginPages'
import NamePages from './pages/NamePages'
import LannguagePage from './pages/LanguagePage'
import PerName from './pages/PerName'
import HomaPage from './pages/HomaPage'
import PerLanguage from './pages/PerLanguage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import { useState } from 'react'


function App() {
  
  const [ userName, setUserName ] = useState('')
console.log(userName)
  return (
    <div>
     <h1>Reac-router-dom</h1>
     <Routes>
      <Route path='/' element={<LoginPages setUserName={setUserName}/>}/>
      <Route element={<ProtectedRoutes userName={userName}/>}>
        <Route path='/home' element={<HomaPage/>}/>
        <Route path='/name' element={<NamePages/>}/>
        <Route path='/name/:name' element={<PerName />}/>
        <Route path='/language' element={<LannguagePage/>}/>
        <Route path='/language/:language' element={<PerLanguage/>}/>
      </Route>
      <Route path='*' element={<h2>Esta página no existe</h2>}/>
     </Routes>
    </div>
  )
}

export default App
