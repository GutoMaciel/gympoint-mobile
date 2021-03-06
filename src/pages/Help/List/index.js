import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {useSelector} from 'react-redux';
import { withNavigationFocus} from 'react-navigation';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, NewQuestionButton, RequestList, Request, RequestInfo, Text, RequestHeader, RequestHeaderContent, RequestDate, Question } from './styles';
import { formatRelative } from 'date-fns';
import { parseISO } from 'date-fns/esm';

function List({ navigation, isFocused}) {
  const studentId = useSelector(state => state.student.id);
  const [helpOrders, setHelpOrders] = useState([]);

  async function getHelpOrders() {
    try {
      const response = await api.get(`/students/help-orders/${studentId}`);

      const data = response.data.map(request => ({
        ...request,
        createdAt: formatRelative(parseISO(request.createdAt), new Date())
      }));

      setHelpOrders(data);
    } catch (err) {
      Alert.alert('Error', `${err.response.data.error}`);
    }
  }

  useEffect (() => {
    if (isFocused) {
      getHelpOrders();
    }
  }, [isFocused]);

  function handleNavigate(item) {
    navigation.navigate('Show', { item });
  }

  return (
    <>
    <Container>
      <NewQuestionButton onPress={() => navigation.navigate('New')}>Request Help</NewQuestionButton>

      <RequestList
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Request onPress={() => handleNavigate(item)}>
            <RequestHeader>
              <RequestHeaderContent>
                {item.answer ? (
                  <RequestInfo>
                    <Icon name="check-circle" size={15} color="#42cb59" />
                    <Text answer>Answered</Text>
                  </RequestInfo>
                ) : (
                  <RequestInfo>
                    <Icon name="check-circle" size={15} color="#999" />
                    <Text>Unanswered</Text>
                  </RequestInfo>
                )}
              </RequestHeaderContent>
              <RequestDate>{item.createdAt}</RequestDate>
            </RequestHeader>

            <Question>{item.question}</Question>
          </Request>
        )}
      />
    </Container>
    </>
  );
}

export default withNavigationFocus(List);
