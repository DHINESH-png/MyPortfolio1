import styles from './PortStyles.module.css';
import portImg from '../../assets/Myphoto.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Port() {
    const { theme, toggleTheme }=useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twittericon = theme === 'light' ? twitterLight : twitterDark;
    const githubicon = theme === 'light' ? githubLight : githubDark;
    const linkedinicon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
  <>
   <section id='port' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.Port} 
        src={portImg} 
        alt="pro pic" />
        </div>
        <div className={styles.info}>
            <h1>Dhinesh D</h1>
            <h2>Frontend Developer</h2>
            <img className={styles.colorMode}
        src={themeIcon}
        alt='color Mode icon'
        onClick={toggleTheme}
        />
        <span>
            <a href="https://twitter.com/" target='_blank'>
            <img src={twittericon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/" target='_blank'>
            <img src={githubicon} alt="github icon" />
            </a>
            <a href="https://LinkedIn.com/" target='_blank'>
            <img src={linkedinicon} alt="LinkedIn icon" />
            </a>
        </span>
        <p className={styles.description}>
            with a passion for <br />developing modern React <br /> web apps 
            for commercial <br />
            bussiness.</p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>
        </div>     
  </section>
  </>
  )
}

export default Port