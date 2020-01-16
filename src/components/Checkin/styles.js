import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;

export const CheckinNumber = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const CheckinDate = styled.Text`
  font-size: 12px;
  color: #999;
`;
