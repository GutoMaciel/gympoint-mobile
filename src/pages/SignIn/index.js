import React from 'react';
import { Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/8-layers.png';
import Background from '~/components/Background/BackgroundSignIn';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  // const [id, setId] = useState('');

  // const dispatch = useDispatch();

  // const loading = useSelector(state => state.student.loading);

  // const handleSubmit = () => {
  //   // dispatch(signInRequest(id));
  // }


  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            autoCorrect={false}
            keyboardType="numeric"
            placeholder="Your student ID"
            // returnKeyType="send"
            // onSubmitEditing={handleSubmit}
            // value={id}
            // onChangeText={setId}
            />
            <SubmitButton onPress={() => {}}>
              Sign In
            </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
