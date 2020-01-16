import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 25px;
`;

export const Card = styled.View`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const AnswerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionTitle = styled.Text`
  font-weight: bold;
  color: #444;
`;

export const QuestionDate = styled.Text`
  font-size: 11px;
  color: #999;
`;

export const QuestionText = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const AnswerTitle = styled.Text`
  color: #444;
  font-weight: bold;
  margin-top: 40px;
`;

export const Text = styled.Text`
  display: flex;
  line-height: 22px;
  font-size: 14px;
  color: #888;
  margin-top: 3px;
`;


