import { useCallback, useEffect, useState } from '@lynx-js/react';
import { Container } from '../components/Container.tsx';
import '../index.scss';

export function Settings() {

  return (
    <Container title="Settings" backgroundColor="settings-container">
      <text className="content-text">
        Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
      </text>
    </Container>
  )
}
