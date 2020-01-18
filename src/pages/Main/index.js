import React, {useEffect, useState} from 'react';
import api from '~/services/api';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Checkin from '~/components/Checkin';

import { Container, List, CheckinButton } from './styles';
import { withNavigationFocus } from 'react-navigation';

// const data = [1, 2, 3, 4, 5, 6, 7, 8];

function Main({ isFocused }) {
  const studentId = useSelector(state => state.student.id);
  const [checkins, setCheckins] = useState([]);
  // const [loading, setLoading] = useState(false);

  async function getCheckins() {
    try {
      const response = await api.get(`/students/${studentId}/checkins`);

      setCheckins(response.data);
    } catch (err) {
      alert.alert('Error.', `${err.response.data.error}`);
    }
  }

  useEffect(() => {
    if (isFocused) {
      getCheckins();
    }
  }, [isFocused]);

  async function handleNewCheckin() {
    try {
      // setLoading(true);
      await api.post(`students/${studentId}/checkins`);
      Alert.alert('Done', 'Successfull checkin!');
    } catch (err) {
      Alert.alert('Sorry', `${err.response.data.error}`);
    } finally {
      getCheckins();
      // setLoading(false);
    }
  }

  return (
    <>
      <Background>
        <Header />
        <Container>
          <CheckinButton onPress={handleNewCheckin}>
            New check-in
          </CheckinButton>
          <List
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => {
              return (
                <Checkin
                  checkin={item}
                  index={index}
                  totalRows={checkins.length} />
              );
            }}
          />
        </Container>
      </Background>
  </>
  );
}


Main.navigationOptions = {
  tabBarLabel: 'Checkins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={22} color={tintColor} />
    ),
  };

  export default withNavigationFocus(Main);
