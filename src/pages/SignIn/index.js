import React, {useState} from 'react';
import { Image } from 'react-native';

import { useDispatch } from 'react-redux';

import logo from '~/assets/8-layers.png';
import Background from '~/components/Background/BackgroundSignIn';

import { signInRequest } from '~/store/modules/student/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [studentId, setStudentId] = useState('');

  // const loading = useSelector(state => state.student.loading);

  const handleSubmit = () => {
    dispatch(signInRequest(studentId));
  }


  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            autoCorrect={false}
            keyboardType="numeric"
            placeholder="Your student ID"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={studentId}
            onChangeText={setStudentId}
            />
            <SubmitButton onPress={handleSubmit}>
              Sign In
            </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
