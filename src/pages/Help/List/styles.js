import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
  flex: 1;
`;

export const NewQuestionButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const RequestList = styled.FlatList.attrs({
  showsVerticalIndicator: false,
})`
  flex: 1;
  padding: 0;
  margin-bottom: 30px;
`;

export const Request = styled.TouchableOpacity`
  margin-top: 15px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
`;
export const RequestHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const RequestHeaderContent = styled.View``;

export const RequestInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${props => (props.answer ? '#42cb59' : '#999')};
  align-self: center;
`;

export const RequestDate = styled.Text`
  color: #999;
  font-size: 10px;
  align-self: center;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #555;
  margin-top: 10px;
  line-height: 20px;
`;



