import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  #back-button {
    padding: 12px;

    @media screen and (min-width: 768px) {
      position: absolute;
      left: 0;
      padding: 12px 18px 12px 12px;
    }

    span {
      display: none;

      @media screen and (min-width: 768px) {
        display: block;
      }
    }

    svg {
      display: block;

      @media screen and (min-width: 768px) {
        display: none;
        margin-right: 6px;
      }
    }
  }
`;

export const UserForm = styled.form`
  input + input {
    margin-top: 16px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: flex-start;
  }
`;

export const Avatar = styled.div`
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-right: 48px;
    margin-bottom: 0;
  }
`;

export const FormInputs = styled.div``;

export const FormAction = styled.div`
  text-align: center;
  margin-top: 32px;
`;
