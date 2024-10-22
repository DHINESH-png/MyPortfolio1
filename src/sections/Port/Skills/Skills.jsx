import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../../assets/checkmark-light.svg'
import checkMarkDark from '../../../assets/checkmark-dark.svg'
import SkillList from '../../../common/SkillList'
import { useTheme } from '../../../common/ThemeContext';

function Skills() {
  const { theme}=useTheme();

  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillslist}>
          <SkillList src={checkMarkIcon} skill='HTML'/>
          <SkillList src={checkMarkIcon} skill='CSS'/>
          <SkillList src={checkMarkIcon} skill='JavaScript'/>
          <SkillList src={checkMarkIcon} skill='BootStrap'/>
        </div>
        <hr />
        <div className={styles.skillslist}>
          <SkillList src={checkMarkIcon} skill='Python'/>
          <SkillList src={checkMarkIcon} skill='Numpy'/>
          <SkillList src={checkMarkIcon} skill='Streamlit'/>
          <SkillList src={checkMarkIcon} skill='Django'/>
        </div>
        <hr />
        <div className={styles.skillslist}>
          <SkillList src={checkMarkIcon} skill='NodeJs'/>
          <SkillList src={checkMarkIcon} skill='ExpressJs'/>
          <SkillList src={checkMarkIcon} skill='ReactJs'/>
        </div>
        <hr/>
        <div className={styles.skillslist}>
          <SkillList src={checkMarkIcon} skill='MySQL'/>
          <SkillList src={checkMarkIcon} skill='MongoDB'/>
        </div>
    </section>
  )
}

export default Skills