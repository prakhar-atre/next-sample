import { DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Home',
  robots: 'noindex, nofollow',
  description: 'Next App'
};

const dmSans = DM_Sans({ subsets: ['latin'] });

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>

        <body className={`${dmSans.className} prose`}>
          <main className="flex w-full min-h-screen flex-col">
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </main>
          <div id="portal" />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
