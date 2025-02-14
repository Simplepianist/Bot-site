'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '../components/Sidebar';

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
                <div className="ml-64 p-8 w-full"></div>
            </div>
        </div>
    );
}
