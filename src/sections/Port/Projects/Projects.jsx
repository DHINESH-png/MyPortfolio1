import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../../assets/pottery.png'
import freshBurger from '../../../assets/calculator.png'
import hipster from '../../../assets/Currency.png'
import ProjectCard from '../../../common/ProjectCard'
import fitlift from '../../../assets/deccan airways (2).png'
import icon from '../../../assets/icon.png'
import clock from '../../../assets/clock.png'
import stopwatch from '../../../assets/Stopwatch.png'
import car from '../../../assets/car.png'

function Projects() {
  return ( 
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://github.com/DHINESH-png/pottery.in'
         h3='Pottery'
         p='Advertisement Poster'/>
          <ProjectCard src={freshBurger} link='https://github.com/DHINESH-png/Calculator.git'
         h3='MyCalc'
         p='Calculator'/>
          <ProjectCard src={hipster} link='https://github.com/DHINESH-png/Currency-Converter.git'
         h3='MyCurrency'
         p='Currency Converter'/>
          <ProjectCard src={fitlift} link='https://github.com/DHINESH-png/Deccan-Air.git'
         h3='Deccan Air'
         p='Airways'/>
         <ProjectCard src={icon} link='https://github.com/DHINESH-png/To-Do'
         h3='Bucket-List'
         p='To-Do App'/>
          <ProjectCard src={clock} link='https://github.com/DHINESH-png/Clock'
         h3='MyClock'
         p='Digital Clock'/>
          <ProjectCard src={stopwatch} link='https://github.com/DHINESH-png/Stopwatch'
         h3='Get, Set & Go'
         p='StopWatch'/>
          <ProjectCard src={car} link='https://github.com/DHINESH-png/EV-olution'
         h3='EV-olution'
         p='EV-Car'/>
        </div>
    </section>
  )
}


export default Projects