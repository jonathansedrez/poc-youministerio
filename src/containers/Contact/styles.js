import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.span`
  width: 100%;
  height: 48px;
  background: ${colors.errorColor};
  color: ${colors.white};
`;

export const Success = styled.span`
  width: 100%;
  height: 48px;
  background: 'green';
  color: ${colors.white};
`;

export const Form = styled.form`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 8px;
  color: ${colors.black};
  font-weight: bold;
  z-index: 1;
  text-align: center;
`;

export const Input = styled.input`
  width: 420px;
  height: ${({ message }) => (message ? '122px' : '48px')};
  margin: 8px 0 16px;
  padding: 8px;
  border: 1px solid ${({ error }) => (error ? colors.errorColor : colors.gray)};
  outline: none;
`;

export const ErrorMessage = styled.span`
  margin-top: -8px;
  width: 200px;
  font-size: 11px;
  color: ${colors.errorColor};
`;

export const ButtonSubmit = styled.button`
  width: 200px;
  height: 48px;
  border: none;
  background-color: ${colors.errorColor};
  color: white;
`;
