import React from 'react'
import Header1 from './AboutComp/Header1'
import Section from './AboutComp/Section'
import Header2 from './AboutComp/Header2'
import SectionCart from './AboutComp/SectionCart'
import SectionSeacrh from './AboutComp/SectionSeacrh'
const About = () => {
    return (
        <section className='pt-[70px] About-bg-fon'>
            <Header1 />
            <Section />
            <Header2 />
            <SectionCart />
            <SectionSeacrh />
        </section>
    )
}

export default About