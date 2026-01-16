import { useEffect, useState } from 'react'
import {
    Home,
    CalendarCheck,
    GraduationCap,
    Users,
    User,
    ClipboardList,
    MessageSquare,
    BookOpen,
    Settings,
} from 'lucide-react'
import './sidebar.css'

const COLLAPSE_WIDTH = 700

const navItems = [
    { type: 'item', id: 'home', label: '首页', icon: Home },
    { type: 'item', id: 'today', label: '今日事项', icon: CalendarCheck },
    { type: 'item', id: 'assistant', label: '课堂助手', icon: GraduationCap },

    { type: 'group', label: '学员与班级' },
    { type: 'item', id: 'student', label: '学员信息', icon: Users },
    { type: 'item', id: 'class', label: '班级管理', icon: User },
    { type: 'item', id: 'makeup', label: '补课计划', icon: ClipboardList },

    { type: 'group', label: '服务与规划' },
    { type: 'item', id: 'feedback', label: '课后反馈', icon: MessageSquare },
    { type: 'item', id: 'phrases', label: '常用语', icon: BookOpen },
    { type: 'item', id: 'plan', label: '学习规划', icon: BookOpen },

    // { type: 'item', id: 'settings', label: '设置', icon: Settings },
] as const

export default function Sidebar({
    active,
    onChange,
}: {
    active: string
    onChange: (id: string) => void
}) {
    const [collapsed, setCollapsed] = useState(
        window.innerWidth < COLLAPSE_WIDTH
    )

    useEffect(() => {
        const onResize = () =>
            setCollapsed(window.innerWidth < COLLAPSE_WIDTH)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            {/* <div className="sidebar-header">
            </div> */}
            <nav className="sidebar-nav">
                {navItems.map((item, index) => {
                    if (item.type === 'group') {
                        // 折叠状态：分组标题直接隐藏（Win11 就是这样）
                        if (collapsed) return null

                        return (
                            <div key={`group-${index}`} className="sidebar-group-title">
                                {item.label}
                            </div>
                        )
                    }

                    const Icon = item.icon
                    return (
                        <div
                            key={item.id}
                            className={`sidebar-item ${active === item.id ? 'active' : ''
                                }`}
                            onClick={() => onChange(item.id)}
                            title={collapsed ? item.label : undefined}
                        >
                            <Icon size={16} />
                            {!collapsed && <span>{item.label}</span>}
                        </div>
                    )
                })}
            </nav>
            <div className="sidebar-footer">
                <div
                    key={'settings'}
                    className={`sidebar-item ${active === 'settings' ? 'active' : ''
                        }`}
                    onClick={() => onChange('settings')}
                    title={collapsed ? '设置' : undefined}
                >
                    <Settings size={20} />
                    {!collapsed && <span>{'设置'}</span>}
                </div>
            </div>
        </aside>
    )
}
