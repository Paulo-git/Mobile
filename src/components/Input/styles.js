import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  opacity: 0.8;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#262524',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: black;
`;
