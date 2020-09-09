import styled from 'styled-components';

export const Container = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 9999px;
  text-align: center;
  line-height: 128px;
  background: ${(props) =>
    props.preview ? `url(${props.preview})` : '#343a40'};
  border: 1px solid #2e3238;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

export const Input = styled.input`
  display: none;
`;
