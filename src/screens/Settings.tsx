import { useEffect, useState } from '@lynx-js/react';
import { Container } from '../components/Container.tsx';
import '../App.css';

export function Settings() {

  return (
    <Container title="Settings" backgroundColor="settings-container">
      <text className="text-2xl leading-relaxed text-center mx-auto text-white">
        Adjust display settings, manage notifications, and configure account details to make the app work perfectly for you.
      </text>
    </Container>
  )
}
