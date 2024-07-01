import './design.css'
import GitHub from '../assets/github-mark.png' 
import { VscIssues } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";
import { PiGitForkLight } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion"
import { IoTelescopeOutline } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type ProjectProps = {
    project: Project
}

export default function Project({project}: ProjectProps){
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    const sectionVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    return(
        <motion.div className='project'
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        >
            <div className='project-top'>
                <h3>{project.name}</h3>
                <div className='options'>
                   <a className='icons' href={project.url}>
                    <img src={GitHub} className='logo' alt='GitHub'/>
                    <p>Code</p>
                   </a>
                   {project.homepage && 
                   <a className='icons' href={project.homepage}>
                    <IoTelescopeOutline size={30} color='lightgray'/>
                    <p>Live</p>
                   </a>}
                </div>
            </div>
            <p>{project.description}</p>
            <div className='project-bottom'>
                <div className='github-stat'>
                    <h4>{project.language}</h4>
                </div>
                <div className='github-stat'>
                    <VscIssues size={25}/>
                    <div className='github-stat-right'>
                        <span>{project.issues}</span>
                        <span>Issues</span>
                    </div>
                </div>
                <div className='github-stat'>
                    <CiStar size={25}/>
                    <div className='github-stat-right'>
                        <span>{project.starCount}</span>
                        <span>Stars</span>
                    </div>
                </div>
                <div className='github-stat'>
                    <PiGitForkLight size={25}/>
                    <div className='github-stat-right'>
                        <span>{project.forks}</span>
                        <span>Forks</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}