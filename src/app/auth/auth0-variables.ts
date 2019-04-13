interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'Eod6jaL8jFl6I41TgKP9FfuW0DmgBi4L',
    CLIENT_DOMAIN: 'getbubun.auth0.com',
    AUDIENCE: 'https://getbubun.auth0.com/userinfo',
    REDIRECT: 'http://localhost:4200/profile',
    SCOPE: 'openid profile'
  };
  