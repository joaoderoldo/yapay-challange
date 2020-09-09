import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  #create-user {
    @media screen and (min-width: 768px) {
      position: absolute;
      right: 0;
    }

    span {
      display: none;

      @media screen and (min-width: 768px) {
        display: block;
      }
    }

    #create-user-icon {
      display: block;

      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;

export const UserList = styled.div`
  max-height: 450px;
  overflow-y: auto;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
  }
`;
