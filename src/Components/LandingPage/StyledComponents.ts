import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.nav`
  height: 20%;
  width: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5%;
`;

const SignUpLink = styled(Link)`
  box-sizing: border-box;
  height: auto;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-style: solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    ${({ theme }) => theme.accent.primary},
    ${({ theme }) => theme.accent.secondary}
  );

  font-weight: 700;
  font-size: calc(1vmax + 0.5rem);

  white-space: nowrap;

  &:hover {
    backdrop-filter: invert(100%) opacity(0.2);
  }
`;

const SignInLink = styled(Link)`
  box-sizing: border-box;
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-style: solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    ${({ theme }) => theme.accent.primary},
    ${({ theme }) => theme.accent.secondary}
  );

  font-size: calc(1vmax + 0.5rem);
  font-weight: 700;

  white-space: nowrap;

  &:hover {
    backdrop-filter: invert(100%) opacity(0.2);
  }
`;

const SignInWithGoogleLight = styled.button`
  width: 11vmax;
  height: 2.8vmax;
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
  background-image: url('btn_google_signin_light_normal_web@2x.png');
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.1s linear;

  &:hover {
    background-image: url('btn_google_signin_light_focus_web@2x.png');
  }

  &:active {
    background-image: url('btn_google_signin_light_pressed_web@2x.png');
  }
`;

const SignInWithGoogleDark = styled.button`
  width: 11vmax;
  height: 2.8vmax;
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
  background-image: url('btn_google_signin_dark_normal_web@2x.png');
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.1s linear;

  &:hover {
    background-image: url('btn_google_signin_dark_focus_web@2x.png');
  }

  &:active {
    background-image: url('btn_google_signin_dark_pressed_web@2x.png');
  }
`;

export {
  Container,
  NavContainer,
  SignInLink,
  SignInWithGoogleDark,
  SignInWithGoogleLight,
  SignUpLink,
};
