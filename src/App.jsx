import React, { useEffect } from 'react'
import Landing from './pages/Landing'
import Router from './Routes/Router'
import ScrollToTop from './components/ScrollToTop'
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    }, [])
  })

  return (
    <div>
      <ScrollToTop/>
      <Router/>
    </div>
  )
}

export default App
