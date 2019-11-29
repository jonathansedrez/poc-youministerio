import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Form = styled.form`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  height: 48px;
  margin: 8px 0;
  padding: 8px;
  border: 1px solid ${({ error }) => (error ? 'red' : 'gray')};
  outline: none;
`;

export const ErrorMessage = styled.span`
  width: 200px;
  font-size: 8px;
  color: ${colors.errorColor};
`;

export const ButtonSubmit = styled.button`
  width: 200px;
  height: 48px;
  border: none;
  background-color: ${colors.errorColor};
  color: white;
`;
