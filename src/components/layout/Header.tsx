import { useThemeStore } from '@/store/useThemeStore'
import { Link } from '@tanstack/react-router'
import { Sun, Moon } from 'lucide-react'

export const Header = () => {
    const isDarkMode = useThemeStore((state) => state.isDarkMode)
    const toggleTheme = useThemeStore((state) => state.toggleTheme)

    return (
        <header className='flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all'>
            <div className='flex items-center gap-10'>
                <Link
                    to="/"
                    className="text-xl font-bold text-black dark:text-white tracking-tight"
                >
                    DevBoard
                </Link>
                <nav className="flex items-center gap-8">
                    <Link
                        to="/"
                        activeProps={{ className: 'text-black dark:text-white font-semibold' }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/explore"
                        search={{
                            q: '',
                            category: 'All',
                            sort: 'newest',
                        }}
                        activeProps={{ className: 'text-black dark:text-white font-semibold' }}
                    >
                        Explore
                    </Link>
                </nav>
            </div>
            <button
                onClick={() => toggleTheme()}
                className="text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all"
                aria-label="Toggle theme"
            >
                {isDarkMode ? (
                    <Sun size={20} />
                ) : (
                    <Moon size={20} />
                )}
            </button>
        </header>
    )
}