'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '../components/Sidebar';

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        }
    }, [status, router]);

    function fetchUser(access_token: any) {
        return fetch('https://discordapp.com/api/users/@me', {
            headers: { Authorization: `Bearer ${access_token}` },
        }).then((response) => response.json());
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!session) {
                return;
            }

            try {
                const user = await fetchUser(session.accessToken);
                const response = await fetch('http://localhost:8000/scoreboard/' + user.id, {
                    headers: {
                        'X-API-KEY': 'JonasW03',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                if (result.length === 0) {
                    throw new Error('No data available');
                }
                console.log(result);
                setData(result);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [session]);

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
                <div className="ml-64 p-8 w-full">
                    <div className="relative rounded-lg overflow-hidden mb-8">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center">
                            <h1 className="text-4xl font-bold mb-4">Scoreboard</h1>
                        </div>
                    </div>
                    {error ? (
                        <div className="text-red-500 text-xl">{error}</div>
                    ) : (
                        <table className="w-full bg-gray-800 rounded-lg overflow-hidden mb-8 border border-gray-700">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Rank
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Player
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Coins
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {data.map((item) => (
                                    <tr
                                        key={item.position}
                                        className={`hover:bg-gray-700 transition-colors duration-200 ${item.is_searched ? 'bg-blue-600' : ''}`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${item.position === 1 ? 'bg-yellow-500' : item.position === 2 ? 'bg-gray-400' : item.position === 3 ? 'bg-orange-600' : 'bg-[#96a1e3]'} text-gray-900`}
                                            >
                                                {item.position}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.username}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-400">
                                            {item.money}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
