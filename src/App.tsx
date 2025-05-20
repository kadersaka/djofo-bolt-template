import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import TrainingPage from './pages/TrainingPage';
import InvestigationsPage from './pages/InvestigationsPage';
import PodcastsPage from './pages/PodcastsPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="content" element={<ContentPage />} />
              <Route path="training" element={<TrainingPage />} />
              <Route path="investigations" element={<InvestigationsPage />} />
              <Route path="podcasts" element={<PodcastsPage />} />
              <Route path="community" element={<CommunityPage />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;