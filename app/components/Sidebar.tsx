'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar(my_session: any) {
    const session = my_session.session;
    const pathname = usePathname();

    const isActivePath = (path: string) => {
        return pathname === path ? 'bg-gray-800' : '';
    };

    return (
        <div className="w-64 bg-[#111827] h-screen fixed left-0 p-4">
            <div className="flex items-center mb-8">
                {session?.user?.image ? (
                    <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                )}
                <span className="ml-2 text-xl font-bold">{session?.user?.name || 'Error'}</span>
            </div>

            <div className="space-y-4">
                <div className="text-gray-400 text-sm font-semibold">ESSENTIALS</div>

                <Link
                    href="/"
                    className={`flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer ${isActivePath('/')}`}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>Dashboard</span>
                </Link>

                <Link
                    href="/scoreboard"
                    className={`flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer ${isActivePath('/scoreboard')}`}
                >
                    <svg className="w-5 h-[22px]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <span>Scoreboard</span>
                </Link>

                <Link
                    href="/commands"
                    className={`flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer ${isActivePath('/commands')}`}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>Command List</span>
                </Link>

                <Link
                    href="/gaming"
                    className={`flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer ${isActivePath('/gaming')}`}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>Gaming</span>
                </Link>

                <Link
                    href="/socials"
                    className={`flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer ${isActivePath('/socials')}`}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 5a3 3 0 00-3 3v6a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3H6zm0 2h8a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V8a1 1 0 011-1z" />

                        <path d="M2 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0V9H3a1 1 0 01-1-1z" />
                    </svg>
                    <span>Socials</span>
                </Link>
            </div>
        </div>
    );
}
