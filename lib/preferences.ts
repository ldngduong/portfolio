export type Locale = 'en' | 'vi';
export type Theme = 'light' | 'dark';

export interface Preferences {
  locale: Locale;
  theme: Theme;
}

export const preferenceCookies = {
  locale: 'portfolio-locale',
  theme: 'portfolio-theme',
} as const;
