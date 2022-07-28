import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string;
    };
    text: {
      primary: string;
    };
    accent: {
      primary: string;
      secondary: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  background: {
    primary: '#ffffff',
  },
  text: {
    primary: '#000000',
  },

  accent: {
    primary: '#FFDA44',
    secondary: '#d63131',
  },
};

export const darkTheme: DefaultTheme = {
  background: {
    primary: '#000000',
  },
  text: {
    primary: '#ffffff',
  },
  accent: {
    primary: '#FFDA44',
    secondary: '#d63131',
  },
};
