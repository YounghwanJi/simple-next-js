import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/entities/user/model/auth-context';

export const metadata: Metadata = {
    title: 'Sunday Systems - Domestic Intelligence',
    description: 'Memo is the world\'s first AI home companion capable of mastering any domestic skill via human imitation.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black antialiased">
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
