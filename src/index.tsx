import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import {App} from './App.tsx'
import { ResearcherVideo } from './screens/ResearcherVideo.tsx'
import { Settings } from './screens/Settings.tsx'

// This maps different paths to specific components (screens)
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/account" element={<ResearcherVideo />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
