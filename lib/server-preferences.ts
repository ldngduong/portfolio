import { cache } from 'react';
import { cookies } from 'next/headers';
import { preferenceCookies, type Preferences } from './preferences';

export const getPreferences = cache(async (): Promise<Preferences> => {
  const store = await cookies();

  return {
    locale: store.get(preferenceCookies.locale)?.value === 'vi' ? 'vi' : 'en',
    theme: store.get(preferenceCookies.theme)?.value === 'dark' ? 'dark' : 'light',
  };
});
