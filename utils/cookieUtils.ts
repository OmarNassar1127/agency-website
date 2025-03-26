const COOKIE_CONSENT_KEY = 'dominium_cookie_consent';

type CookiePreferences = {
  essential: boolean;
  performance: boolean;
  functional: boolean;
  targeting: boolean;
  accepted: boolean;
};

const defaultPreferences: CookiePreferences = {
  essential: true, // Essential cookies cannot be rejected
  performance: false,
  functional: false,
  targeting: false,
  accepted: false,
};

/**
 * Get the user's cookie preferences from localStorage
 */
export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') {
    return defaultPreferences;
  }

  try {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      return JSON.parse(storedConsent);
    }
  } catch (error) {
    console.error('Error reading cookie preferences:', error);
  }

  return defaultPreferences;
};

/**
 * Check if a specific cookie type is allowed
 */
export const isCookieAllowed = (type: keyof Omit<CookiePreferences, 'accepted'>): boolean => {
  if (type === 'essential') {
    return true; // Essential cookies are always allowed
  }

  const preferences = getCookiePreferences();
  return preferences.accepted && preferences[type];
};

/**
 * Open the cookie settings modal
 */
export const openCookieSettings = (): void => {
  if (typeof window !== 'undefined' && window.openCookieSettings) {
    // @ts-ignore - This function is added to window in the CookieConsent component
    window.openCookieSettings();
  }
};
