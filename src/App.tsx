import { useCallback, useEffect, useState } from '@lynx-js/react'
import { Container } from './components/Container.tsx';
import './App.css';

export function App() {

  return (
    <Container title="Home" backgroundColor="app-container">
      <text className="content-text">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
      </text>
    </Container>
  )
}
