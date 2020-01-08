import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/8-layers.png';

import Background from '~/components/Background/BackgroundSignIn';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
      </Container>
    </Background>
  );
}
