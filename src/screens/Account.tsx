import { useCallback, useEffect, useState } from '@lynx-js/react';
import { Container } from '../components/Container.tsx';
import '../index.scss';

export function Account() {

  return (
    <Container title="Account" backgroundColor='account-container'>
      <text className="content-text">
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
      </text>
    </Container>
  )
}
