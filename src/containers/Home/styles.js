import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 8px;
  color: ${colors.black};
  font-weight: bold;
  z-index: 1;
  text-align: center;
  font-size: ${props => (props.secondary ? '45px' : '72px')};
`;

export const SubTitle = styled.h3`
  font-size: 28px;
  color: ${colors.black};
  margin-left: 92px;
  text-align: center;
  font-weight: 300;
  z-index: 1;
  &:before {
    content: '__';
  }
`;

export const Wrapper = styled.div`
  height: calc(100vh - 48px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  font-size: 16px;
  z-index: -999;
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  bottom: -80px;
  left: -32px;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: ${colors.white};
  position: relative;
`;

export const H5 = styled.h5`
  position: relative;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: lighter;
  text-align: center;
  &:before {
    position: absolute;
    height: 60px;
    width: 1px;
    background: #615cfd;
    content: '';
    left: 50%;
    bottom: 170%;
  }
`;

export const H4 = styled.h5`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #2c2c2c;
  margin-top: 24px;
  padding-bottom: 12px;
`;

export const Paragraph = styled.p`
  color: #727272;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 0;
`;

export const Box = styled.div`
  font-size: 16px;
  width: 350px;
  text-align: center;
  padding: 48px;
  border: 1px solid ${colors.gray};
  transition: 0.3s;

  &:hover {
    border: 1px solid ${colors.primaryColor};
  }
`;

export const InnerPresentation = styled.div`
  display: flex;
  margin-top: 67px;
  width: 90%;
  max-width: 1200px;
  align-self: center;
  justify-content: space-evenly;
`;
