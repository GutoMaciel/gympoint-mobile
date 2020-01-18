import React from 'react';

import Background from '~/components/Background';

import { Container, Card, AnswerHeader, QuestionTitle, QuestionDate, AnswerTitle, Text } from './styles';

export default function Show({ navigation }) {
  const helpOrder = navigation.getParam('item');


  return (
    <Background>
      <Container>
        <Card>
          <AnswerHeader>
            <QuestionTitle>Question:</QuestionTitle>
            <QuestionDate>{helpOrder.createdAt}</QuestionDate>
          </AnswerHeader>

          <Text>{helpOrder.question}</Text>


            <AnswerTitle>Answer:</AnswerTitle>
            <Text>
              {helpOrder.answer || 'Your question has not yet been answered.'}
            </Text>

        </Card>
      </Container>
    </Background>
  );
}

