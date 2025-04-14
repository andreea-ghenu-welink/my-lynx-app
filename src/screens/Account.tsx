import { useCallback, useEffect, useState } from '@lynx-js/react';
import { Container } from '../components/Container.tsx';
import '../App.css';

export function Account() {

  return (
    <Container title="Account" backgroundColor='account-container'>
      <text className="text-2xl font-normal text-center mx-auto text-white">
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
      </text>
    </Container>
  )
}
