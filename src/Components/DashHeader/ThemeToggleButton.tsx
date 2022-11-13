import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

import darkModeSVG from '/dark_mode_FILL1_wght400_GRAD0_opsz48.svg';
import lightModeSVG from '/light_mode_FILL1_wght400_GRAD0_opsz48.svg';

import { darkTheme, lightTheme } from '../../themes';
import { DarkModeImg, LightModeImg, StyledButton } from './StyledComponents';

const ToggleButton = styled(StyledButton)`
  height: fit-content;
  width: fit-content;
`;

const ThemeToggleButton = ({ setTheme }: { setTheme: Function }) => {
  const theme = useTheme();

  const themeChecker = () => {
    if (theme.background.primary === '#ffffff') return 'light';
    return 'dark';
  };

  const themeName = themeChecker();

  const invertTheme = () => {
    if (themeName === 'light') setTheme(darkTheme);
    if (themeName === 'dark') setTheme(lightTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  return (
    <ToggleButton
      onClick={() => {
        invertTheme();
      }}
    >
      {themeName === 'light' ? (
        <LightModeImg src={lightModeSVG} />
      ) : (
        <DarkModeImg src={darkModeSVG} />
      )}
    </ToggleButton>
  );
};

export default ThemeToggleButton;
