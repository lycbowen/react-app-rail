import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import FilesPage from './pages/FilesPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

function App() {

  const [active, setActive] = useState('home')

  const renderContent = () => {
    switch (active) {
      case 'home':
        return <HomePage />
      case 'files':
        return <FilesPage />
      case 'profile':
        return <ProfilePage />
      case 'settings':
        return <SettingsPage />
      default:
        return null
    }
  }

  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar active={active} onChange={setActive} />
      <main>
        {renderContent()}
      </main>
    </div>
  )
}

export default App
