import React from 'react';
import './App.css';
import Header from '../src/header/Header'
import About from '../src/components/about/About'
import WorkList from '../src/components/bodySections/WorkList'
import Skills from '../src/components/bodySections/Skills'
import Projects from './components/projects/ProjectsList'
import ProjectDescription from './components/projects/ProjectDescriptionList'
import Education from './components/bodySections/EducationList'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'
import { jobs, education, projects } from './data/data'


function App() {
  return (
    <>
      <Header />
      <About />
      <section id='resume'>
        <WorkList jobs={jobs} />  
        <Education education={education}/>
        <Skills/>                    
      </section>
      <section id='portfolio'>
        <div className='row'>
          <Projects projects={projects}/>
          <ProjectDescription projects={projects}/>
        </div>
      </section>
      <Contact/>
      <Footer/> 
    </>
  );
}

export default App;
