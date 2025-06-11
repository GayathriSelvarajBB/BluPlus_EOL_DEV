export const BASE_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FRONTEND_ENDPOINT}`;
export const BASE_API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_AUTH_ENDPOINT}`;
export const LOCAL_BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
export const ENCRYPTION_SECRET = process.env.REACT_APP_ENCRYPTION_SECRET;
export const LOCAL_CLIENT_SECRET = process.env.REACT_APP_LOCAL_CLIENT_SECRET;

export const MFA_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const MFA_OAUTH_AUTHORIZE_ENDPOINT =
   process.env.REACT_APP_OAUTH_AUTHORIZE_ENDPOINT;
export const DESKTOP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const WEB_REDIRECT_URI = process.env.REACT_APP_WEB_REDIRECT_URI;
export const OAUTH_WEB_REDIRECT_URI =
   process.env.REACT_APP_OAUTH_WEB_REDIRECT_URI;
export const REACT_APP_URL = process.env.REACT_APP_URL;
