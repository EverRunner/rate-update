import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
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
