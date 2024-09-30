import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';

const title = 'Mortgage Rate Update Auto Email Sender';
const description = 'This helps to update mortgage rates and send email to users.';

export const metadata: Metadata = {
    metadataBase: new URL(getURL()),
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    }
};

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body >
                {children}
            </body>
        </html>
    );
}
