import styled from 'styled-components';
import color from '../../styles/variables';

export const Wrapper = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${color.primaryColor};
`;

export const Title = styled.h2`
  /* font-size: 3rem; */
  color: ${color.secondaryColor};
  margin-left: 60px;
  font-weight: normal;
`;

export const Paragraph = styled.p`
  /* font-weight: bold; */
  font-size: 16px;
`;
