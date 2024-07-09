import './App.css'
import Data from '../data/info.ts';
import SideBar from './components/SideBar.tsx';
import NavBar from './components/navbar'
import self from './assets/myself.jpg'
import Skill from './components/skill.tsx';
import TypeIt from 'typeit-react';
import { useEffect, useState, useRef } from 'react';
import {API} from '../data/api.ts';
import { motion } from 'framer-motion';
import Project from './components/project.tsx';
import useActiveSection from './customhooks/useActiveSection.ts';
import useNavBarVisibility from './customhooks/useNavBarVisibility.ts';
import Trail from './components/trail.tsx';
import Section from './components/section.tsx';
import { BsTools } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";

function App() {
  let [myRepos, setMyRepos] = useState([])
  useEffect(()=>{
    async function getRepos(){
     
      let response = await API.fetchMyRepos();
      setMyRepos(response)
    }
    getRepos()
  }, [])
  function parseProjects(item: any): Project{
    return {
      homepage: item.homepage,
      url: item.html_url,
      forks: item.forks_count,
      description: item.description,
      starCount: item.stargazers_count,
      language: item.language,
      name: item.name,
      issues: item.open_issues
    }
  }
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };
  const navBarRef = useRef(null)
  const personalSection = useRef(null)
  const languagesSection = useRef(null)
  const contactMeSection = useRef(null)
  const projectsSection = useRef(null)

  const sections = [
    {className: 'personal', ref: personalSection},
    {className: 'languages', ref: languagesSection},
    {className: 'projects', ref: projectsSection},
    {className: 'contact-me', ref: contactMeSection}
  ]
  const isNavBarVisible = useNavBarVisibility(navBarRef)
  const activeSection = useActiveSection(sections)

  const time = new Date()

 function handleRedirect(){
  window.location.href = 'https://docs.google.com/document/d/1i4zEZiOKvEH6cnvxEJzjEzP0sKo43j7RjDUCqCBUnRE/edit?usp=sharing';
 }
 
  return(
    <div className='container'>
      <Trail/>
      <div ref={navBarRef} className='nav-container'>
        <NavBar personal={personalSection} languages={languagesSection} contact={contactMeSection} projects={projectsSection}/>
        <div className='contacts'>
          {Data.contacts.map(contact => <a href={contact.platformIcon == 'gmail.png' ? `mailto:${contact.link}` : contact.link }><img className='contact-icons' src={getImageUrl(contact.platformIcon)}/></a>)}
        </div>
      </div>
      <div className='content'>
        {!isNavBarVisible && <SideBar activeSection={activeSection} personal={personalSection} languages={languagesSection} contact={contactMeSection} projects={projectsSection}/>}
        <div className='main'>
        <section ref={personalSection} className='personal'>
          <motion.h1
          className='introduction'
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Hi, I am Wasuk ⚡
          </motion.h1>
          <p className='introduction-title'>
          <TypeIt
          getBeforeInit={(instance) => {
            instance
            .type('Machine Learning')
            .pause(750)
            .delete()
            .pause(750)
            .type('Software Development')
            return instance
          }}
          />
          </p>
          <div>
            <p>MY RESUME</p>
            <button onClick={handleRedirect} className='downloadcv-btn'>DOWNLOAD</button>
          </div>
            <div className='personal-section-one'>
              <img src={self} className='self-portrait'/>
              <div>
                <h2><IoPersonOutline/> {Data.fullName.toUpperCase()}</h2>
                <p>{Data.openingStatement}</p>
              </div>
            </div>
          </section>
          <Section>
            <section ref={languagesSection} className='skills'>
              <h2 className='heading'><BsTools/> Skills & Technologies</h2>
              <div className='languages'>
                {Data.skills.languages.map(language => <Skill key={language.language} skillName={language.language} iconUrl={getImageUrl(language.icon)}/>)}
              </div>
              <div className='frameworks'>
                <div className='libraries'>
                  {Data.skills.libraries.map(language => <Skill key={language.library} skillName={language.library} iconUrl={getImageUrl(language.icon)}/>)}
                  {Data.skills.frameWorks.map(language => <Skill key={language.frameWork} skillName={language.frameWork} iconUrl={getImageUrl(language.icon)}/>)}            
                </div>
                <div className='libraries'>
                  {Data.skills.others.map(language => <Skill key={language.technology} skillName={language.technology} iconUrl={getImageUrl(language.icon)}/>)}
                </div>
              </div>
            </section>
          </Section>
          <div ref={projectsSection}>
            <h2 className='heading'><TbBriefcase size={20}/> Projects</h2>
            <section className='projects'>
             {myRepos.map((repo: any) => <Project key={repo.id} project={parseProjects(repo)}/>)}
            </section>
          </div>
          <Section>
            <section ref={contactMeSection} className='contact-me'>
              <h2 className='heading'>Contact Me</h2>
              <p>Have any cool project ideas we could collaborate on? Reach out to me 😁</p>
              <div className='bottombar'>
                <div className='contacts'>
                  {Data.contacts.map(contact => <a href={contact.platformIcon == 'gmail.png' ? `mailto:${contact.link}` : contact.link }><img className='contact-icons' src={getImageUrl(contact.platformIcon)}/></a>)}
                </div>
                <p>&copy; Wasukira Ian {time.getFullYear()}</p>
              </div>
            </section>
          </Section>
        </div>
      </div>
    </div>
  )
}

export default App

function getImageUrl(name: string){
  return new URL(`./assets/${name}`, import.meta.url).href
}