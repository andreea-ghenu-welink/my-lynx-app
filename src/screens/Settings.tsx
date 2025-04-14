import { useCallback, useEffect, useState } from '@lynx-js/react';
import { Container } from '../components/Container.tsx';
import '../App.css';

export function Settings() {

  return (
    <Container title="Settings" backgroundColor="settings-container">
      <text className="text-2xl font-normal text-center mx-auto text-white">
        Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
      </text>
    </Container>
  )
}
