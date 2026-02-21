import { Link } from '@tanstack/react-router'

export const Header = () => (
    <header className='flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 text-gray-700 hover:text-black transition-all'>
        <div className='flex items-center gap-10'>
            <Link
                to="/"
                className="text-xl font-bold text-black tracking-tight"
            >
                DevBoard
            </Link>
            <nav className="flex items-center gap-8">
                <Link
                    to="/"
                    activeProps={{ className: 'text-black font-semibold' }}
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
                    activeProps={{ className: 'text-black font-semibold' }}
                >
                    Explore
                </Link>
                <Link
                    to="/profile"
                    activeProps={{ className: 'text-black font-semibold' }}
                >
                    Profile
                </Link>
            </nav>
        </div>
        <button className="text-gray-700 p-2 hover:bg-gray-50 rounded-full transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
        </button>
    </header>
)