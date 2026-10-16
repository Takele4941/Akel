import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { LanguageProvider } from './i18n'

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </LanguageProvider>
  )
}
