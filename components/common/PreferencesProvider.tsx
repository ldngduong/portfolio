'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { copy } from '@/lib/copy';
import type { Preferences } from '@/lib/preferences';

const PreferencesContext = createContext<Preferences>({ locale: 'en', theme: 'light' });

export function PreferencesProvider({ preferences, children }: { preferences: Preferences; children: ReactNode }) {
  return <PreferencesContext.Provider value={preferences}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const preferences = useContext(PreferencesContext);
  return { ...preferences, t: copy[preferences.locale] };
}
