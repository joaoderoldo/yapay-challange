import styled from 'styled-components';

import { rem } from 'polished';

export const RemoveUser = styled.div`
  position: absolute;
  right: 0;
  font-size: ${rem('24px')};
  cursor: pointer;

  @media screen and (min-width: 992px) {
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e1eaf2;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 992px) {
    &:hover {
      ${RemoveUser} {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const Picture = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 9999px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Name = styled.h3`
  font-size: ${rem('15px')};
  font-weight: bold;

  small {
    font-size: ${rem('13px')};
    font-weight: 300;
  }
`;

export const Email = styled.a`
  text-decoration: none;
  color: #e1eaf2;
  margin-top: 4px;
  display: inline-block;

  @media screen and (min-width: 768px) {
    margin-left: 82px;
  }
`;

export const Phone = styled.a`
  font-size: ${rem('13px')};
  text-decoration: none;
  color: #e1eaf2;
  margin-top: 4px;
  display: inline-block;
`;

export const UserInfo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: block;
    margin-left: 24px;
    width: 250px;
  }
`;
