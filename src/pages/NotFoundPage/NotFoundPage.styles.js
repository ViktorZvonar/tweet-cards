import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto auto auto;
  width: 720px;
  height: 120px;
  font-size: 90px;
  background-color: lightblue;
  font-weight: bold;
  border-radius: 10.3108px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  margin: 200px auto auto auto;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
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

export const HomeBackground = styled.div``;
