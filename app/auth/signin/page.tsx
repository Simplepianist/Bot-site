'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    function fetchUser(access_token: any) {
        return fetch('https://discordapp.com/api/users/@me', {
            headers: { Authorization: `Bearer ${access_token}` },
        }).then((response) => response.json());
    }

    const handleSignIn = async () => {
        try {
            setIsLoading(true);
            await signIn('discord', {
                callbackUrl: '/',
                redirect: true,
            });
        } catch (error) {
            console.error('Sign in error:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div
            className="min-h-screen bg-[#1f2937] flex items-center justify-center"
            data-oid="gxeomhr"
        >
            <div
                className="bg-[#111827] p-8 rounded-lg shadow-lg max-w-sm w-full"
                data-oid="znnrkba"
            >
                <div className="text-center mb-8" data-oid="t41kq57">
                    <h1 className="text-3xl font-bold text-white mb-2" data-oid="zcr2f0o">
                        Welcome to Simplebot
                    </h1>
                    <p className="text-gray-400" data-oid="k1f06h.">
                        Sign in to continue
                    </p>
                </div>
                {error && (
                    <div
                        className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm"
                        data-oid="7m:ynjr"
                    >
                        {error === 'OAuthSignin'
                            ? 'Error connecting to Discord'
                            : error === 'invalid_client'
                              ? 'Invalid Discord client configuration'
                              : 'An error occurred during sign in'}
                    </div>
                )}
                <button
                    onClick={handleSignIn}
                    disabled={isLoading}
                    className="w-full bg-[#5865F2] text-white p-3 rounded-md font-medium hover:bg-[#4752C4] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-oid="98ixzo_"
                >
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="wy.w_5f"
                    >
                        <path
                            d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                            data-oid="tlqqbhp"
                        />
                    </svg>
                    <span data-oid="9.ct1-x">Sign in with Discord</span>
                </button>
            </div>
        </div>
    );
}
