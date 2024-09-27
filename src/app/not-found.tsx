import Cookies from 'js-cookie';
import { DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default async function NotFound() {
  const _locale = Cookies.get('NEXT_LOCALE') || 'en';
  unstable_setRequestLocale(_locale);
  const messages = await getMessages();

  return (
    <html lang={_locale}>
      <body className={`${dmSans.className} prose`}>
        <main className="flex w-full min-h-screen flex-col">
          <NextIntlClientProvider messages={messages}>
            <div>
              <h2>Page Not Found!</h2>
            </div>
          </NextIntlClientProvider>
        </main>
        <div id="portal" />
      </body>
    </html>
  );
}
