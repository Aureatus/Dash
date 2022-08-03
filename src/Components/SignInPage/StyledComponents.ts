import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 40%;

  row-gap: 5%;
`;

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
`;

const StyledInput = styled.input`
  width: 90%;
  background-color: inherit;
  padding: 0;

  border: none;
  border-bottom: 2px solid;

  :focus {
    outline: none;
  }
  :invalid {
    border: none;
    border-bottom: red solid 2px;
  }

  :invalid:focus {
    background: url('/warning-exclamation-sign-in-filled-triangle-svgrepo-com.svg')
      no-repeat 95% 50% lightsalmon;
    background-size: 25px;
    border-bottom: 2px solid;
  }

  :valid {
    border-bottom: green solid 2px;
  }
`;

const StyledSubmitInput = styled.input`
  width: 90%;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    ${({ theme }) => theme.accent.primary},
    ${({ theme }) => theme.accent.secondary}
  );

  padding: 1% 0%;
  font-size: calc(1vmax + 0.3rem);
  font-weight: 700;
`;

const ShowPasswordButtonDark = styled.button`
  height: 100%;
  width: 5%;
  min-height: 24px;
  min-width: 24px;
  padding: 0;
  background-color: inherit;
  border: none;
  background-image: url('visibility_FILL0_wght400_GRAD0_opsz48.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: invert(100%);
`;

const ShowPasswordButtonLight = styled.button`
  height: 100%;
  width: 5%;
  min-height: 24px;
  min-width: 24px;
  padding: 0;
  background-color: inherit;
  border: none;
  background-image: url('visibility_FILL0_wght400_GRAD0_opsz48.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export {
  Container,
  ShowPasswordButtonDark,
  ShowPasswordButtonLight,
  SignInForm,
  StyledInput,
  StyledLabel,
  StyledSubmitInput,
};
