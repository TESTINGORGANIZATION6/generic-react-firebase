import React from 'react'
import NavBar from './components/Layout/Header/NavBar'
import Template from './components/Layout/Template'
import Cards from './components/Layout/Cards'
import ContactUs from './components/Layout/ContactUs'
import SiteFooter from './components/Layout/SiteFooter'

const App = () => {
  return (
    <>
      <NavBar />
      <Template />
      <Cards />
      <ContactUs />
      <SiteFooter />
    </>
  )
}

export default App
