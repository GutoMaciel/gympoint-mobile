import React from 'react';
import { Image } from 'react-native';

import { Container, LogoTitle } from './styles';
import logo from '~/assets/HeaderLogo.png'

export default function Header() {
  return (
    <Container>
      <Image source={logo} style={{ width: 27, height: 14}} />
      <LogoTitle>GYMPOINT</LogoTitle>
    </Container>
  );
}
