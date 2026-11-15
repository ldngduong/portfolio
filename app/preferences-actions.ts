'use server';

import { cookies } from 'next/headers';
import { preferenceCookies } from '@/lib/preferences';

const cookieOptions = { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', httpOnly: true } as const;

export async function setLocale(locale: unknown) {
  if (locale !== 'en' && locale !== 'vi') return;
  (await cookies()).set(preferenceCookies.locale, locale, cookieOptions);
}

export async function setTheme(theme: unknown) {
  if (theme !== 'light' && theme !== 'dark') return;
  (await cookies()).set(preferenceCookies.theme, theme, cookieOptions);
}
