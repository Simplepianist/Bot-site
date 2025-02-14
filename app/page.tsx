'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from './components/Sidebar';

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen bg-[#1f2937] flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-[#1f2937] text-white">
            <div className="flex">
                <Sidebar session={session} />
                {/* Main Content */}
                <div className="ml-64 p-8 w-full">
                    {/* Banner */}
                    <div className="relative rounded-lg overflow-hidden mb-8">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center">
                            <h1 className="text-4xl font-bold mb-4">Welcome to Simplebot</h1>
                            <p className="text-xl opacity-90">
                                Your all-in-one Discord bot solution
                            </p>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Moderation Category */}
                        <div className="bg-[#1a1f2b] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-xl font-bold">Moderation</h2>
                            </div>
                            <p className="text-gray-400">
                                Keep your server safe with advanced moderation tools
                            </p>
                        </div>

                        {/* Fun Commands Category */}
                        <div className="bg-[#1a1f2b] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-xl font-bold">Fun Commands</h2>
                            </div>
                            <p className="text-gray-400">
                                Engage your community with entertaining features
                            </p>
                        </div>

                        {/* Utility Category */}
                        <div className="bg-[#1a1f2b] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-xl font-bold">Utility</h2>
                            </div>
                            <p className="text-gray-400">Essential tools for server management</p>
                        </div>

                        {/* Auto-moderation Category */}
                        <div className="bg-[#1a1f2b] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-xl font-bold">Auto-moderation</h2>
                            </div>
                            <p className="text-gray-400">
                                Automated moderation features to keep your server clean
                            </p>
                        </div>

                        {/* Welcome System Category */}
                        <div className="bg-[#1a1f2b] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-xl font-bold">Welcome System</h2>
                            </div>
                            <p className="text-gray-400">Customize how new members are greeted</p>
                        </div>

                        {/* Custom Commands Category */}
                        <div className="bg-[#1a1f2b] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-xl font-bold">Custom Commands</h2>
                            </div>
                            <p className="text-gray-400">Create your own custom bot commands</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
