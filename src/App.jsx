import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter basename="/SafeRouteWebsite">
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

