import '@testing-library/jest-dom'
import { vi } from 'vitest'

/**
 * Global mock for react-i18next.
 * Returns the key as the translated value, allowing tests to verify
 * that the correct i18n keys are being used in components.
 */
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: 'es',
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))
