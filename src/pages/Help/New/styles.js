import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
`;
export const TextInput = styled.TextInput.attrs({
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 15px;
  background: #fff;
  height: 300;
  text-align: auto;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
