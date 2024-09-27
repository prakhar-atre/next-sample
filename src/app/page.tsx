import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const _locale = Cookies.get('NEXT_LOCALE') || 'en';
  redirect(`/${_locale}`);
}
