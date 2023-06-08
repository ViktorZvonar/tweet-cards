import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 220px;
  height: 50px;

  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;

  background-color: #ebd8ff;

  &:hover {
    background-color: #5cd3a8;
  }

  &:focus {
    box-shadow: 0px 0px 10px #5cd3a8;
  }
`;

export const Back = styled(Link)`
  position: fixed;
  z-index: 3;
  width: 96px;
  height: 50px;
  left: 70px;
  top: 50px;
`;
