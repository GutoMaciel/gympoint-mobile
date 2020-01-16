import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0;
  margin-bottom: 30px;
`;

export const CheckinButton = styled(Button)`
  margin-bottom: 20px;
`;
