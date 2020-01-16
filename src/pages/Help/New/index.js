import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { Alert } from 'react-native';
import api from '~/services/api';

import { Container, TextInput, SubmitButton } from './styles';

export default function New({ navigation }) {
  const studentId = useSelector(state => state.student.id);
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`students/${studentId}/help-orders`, {
        question,
      });

      Alert.alert('Success', 'Your request was sent with success for our professionals.');
      navigation.navigate('List');
    } catch (err) {
      Alert.alert('Error', `${err.response.data.error}`);
    }
  }

  return (
    <Container>
      <TextInput
        multiline
        autoFocus
        returnKeyType="send"
        value={question}
        onChangeText={setQuestion}
        placeholder="Your request..."
      />

      <SubmitButton onPress={handleSubmit}>Send Request</SubmitButton>
    </Container>
  );
}
