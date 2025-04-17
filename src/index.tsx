import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import {App} from './App.tsx'
import { ResearcherVideo } from './screens/ResearcherVideo.tsx'
import { VideoPublication } from './screens/VideoPublication.tsx'

// This maps different paths to specific components (screens)
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/researcher-video" element={<ResearcherVideo />} />
      <Route path="/video-publication" element={<VideoPublication />} />
    </Routes>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
