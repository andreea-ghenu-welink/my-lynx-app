import { useRef, useEffect, useState } from '@lynx-js/react'
import { Container } from './components/Container.tsx';
import './App.css';

export function App() {

  return (
    <Container title="Home" backgroundColor="app-container">
      <text className="text-2xl font-normal text-center mx-auto mb-4 text-white">
        Welcome to our app!
      </text>
      <text className="text-2xl font-normal text-center mx-auto text-white">
        Discover a world of curated videos at your fingertips.
        Browse featured content, explore detailed information, and enjoy a seamless viewing experience
      </text>
    </Container>
  )
}
