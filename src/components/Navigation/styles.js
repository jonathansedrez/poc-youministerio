import { Link as LinkComponent } from '@reach/router';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Link = styled(LinkComponent)`
  color: ${colors.black};
  font-size: 1rem;
  margin: 0 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 48px;
  background-color: transparent;
`;

export const Navigation = styled.nav`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-self: center;
`;

export const Logo = styled.span`
  font-size: 1.8rem;
  font-weight: bolder;
  color: ${colors.black};
  &:before {
    content: 'YOU';
  }
`;

export const Social = styled.span``;
