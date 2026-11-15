'use client';

import { useTransition } from 'react';
import { Moon, Sun } from 'lucide-react';
import { setLocale, setTheme } from '@/app/preferences-actions';
import { usePreferences } from './PreferencesProvider';

export function PreferenceControls() {
  const { locale, theme, t } = usePreferences();
  const [pending, startTransition] = useTransition();
  const dark = theme === 'dark';
  const themeLabel = dark ? t.switchToLight : t.switchToDark;
  const nextLocale = locale === 'vi' ? 'en' : 'vi';
  const controlClass = 'inline-flex size-9 items-center justify-center rounded-lg border border-foreground/15 text-foreground hover:bg-foreground/10 disabled:opacity-60 cursor-pointer';

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        className={`${controlClass} font-mono text-xs font-semibold`}
        disabled={pending}
        lang={nextLocale}
        aria-label={t.switchLanguage}
        title={t.switchLanguage}
        onClick={() => startTransition(() => setLocale(nextLocale))}
      >
        {nextLocale.toUpperCase()}
      </button>
      <button
        type="button"
        className={controlClass}
        disabled={pending}
        aria-label={themeLabel}
        title={themeLabel}
        onClick={() => startTransition(() => setTheme(dark ? 'light' : 'dark'))}
      >
        {dark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
