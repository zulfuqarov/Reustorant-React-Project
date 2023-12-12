import React from 'react'
import Header from './HomeComp/Header'
import Section from './HomeComp/Section'
import Contact from './HomeComp/Contact'
import Section2 from './HomeComp/Section2'
import Blog from './HomeComp/Blog'
import Search from './HomeComp/Search'
import Section3 from './HomeComp/Section3'

const Home = () => {
  return (
    <section>
      <Header />
      <Section />
      <Contact />
      <Section2 />
      <Blog/>
      <Search/>
      <Section3/>
    </section>
  )
}

export default Home