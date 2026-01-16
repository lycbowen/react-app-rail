import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import FilesPage from './pages/FilesPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { LayoutGrid, Minus, Square, X } from 'lucide-react'

function TitleButton({
  icon,
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  danger = false,
}: {
  icon: React.ReactNode;
  hovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  danger?: boolean;
}) {
  return (
    <button
      className={`
        window-button
        ${hovered ? 'is-hovered' : ''}
        ${danger ? 'is-danger' : ''}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </button>
  );
}

function App() {

  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState<string | null>(null);

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
      <header className="title-bar no-select">
        <div className="title-bar-left">
          <LayoutGrid className="app-logo" size={22} />
          <span className="app-name">应用名称</span>
        </div>

        <div className="title-bar-right">
          {/* 添加右上角的三个按钮 */}
          <TitleButton
            icon={<Minus size={16} />}
            hovered={hovered === 'min'}
            onMouseEnter={() => setHovered('min')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => { }}
          />
          <TitleButton
            icon={<Square size={13} />}
            hovered={hovered === 'max'}
            onMouseEnter={() => setHovered('max')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => { }}
          />
          <TitleButton
            icon={<X size={18} />}
            hovered={hovered === 'close'}
            onMouseEnter={() => setHovered('close')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => { }}
            danger
          />
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
