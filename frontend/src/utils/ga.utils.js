import ReactGA from 'react-ga';
import { gaCode } from '../constants/app';

const isProduction = process.env.NODE_ENV === 'production';

export const initGA = () => {
  if (!isProduction) return;

  const trackingCode = gaCode;

  ReactGA.initialize(trackingCode);
};

export const logPageView = () => {
  if (!isProduction) return;

  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (!isProduction) return;

  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (!isProduction) return;

  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
