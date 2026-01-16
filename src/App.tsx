import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import FilesPage from './pages/FilesPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { LayoutGrid } from 'lucide-react'

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
      <header className="title-bar">
        <div className="title-bar-left">
          <LayoutGrid className="app-logo" size={22} />
          <span className="app-name">应用名称</span>
        </div>

        <div className="title-bar-right">
          {/* 添加右上角的三个按钮 */}
          {/* <WindowControls /> */}
        </div>
      </header>
      <div className='app-body'>
        <Sidebar active={active} onChange={setActive} />
        <main className="app-content">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App
