import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import tw from '../../images/tw.png'
import inst from '../../images/inst.png'
import fb from '../../images/fb.png'
import icon from '../../images/iconBlue.png'


const Footer: React.FC = () => {
    return (
      <div className={styles.footerWr}>
        <div className={styles.footer}>
          <div className={styles.text}>
            A modern platform
            <br></br>
            for residential real
            <br></br>
            estate transactions.
          </div>
          <div className={styles.navContainer}>
            <div className={styles.platform}>
              Platform
              <ul>
                <li>Forms</li>
                <li>eSignature</li>
                <li>Collaboration</li>
                <li>Compliance</li>
              </ul>
            </div>
            <div className={styles.plans}>
              Plans
              <ul>
                <li>Plan for Agents</li>
                <li>Plan for Brokers</li>
              </ul>
            </div>
            <div className={styles.resources}>
              Resources
              <ul>
                <li>Help Center</li>
                <li>Blog</li>
                <li>Privacy Center</li>
                <li>
                  Do not sell my<br></br>Personal<br></br>Information
                </li>
              </ul>
            </div>
            <div className={styles.about}>
              About
              <ul>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
            <Link id="bottomL" to="/"><img alt='alt' src={icon} width='64' height='64'></img></Link>
            <div className={styles.bottomC}>© 2021 Society Capital. All rights reserved.</div>
            <div className={styles.bottomR}>
              <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><img alt='alt' src={tw} width='32' height='32'></img></a>
              <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><img alt='alt' src={inst} width='32' height='32'></img></a>
              <a href='https://www.twitter.com' target='_blank'rel='noreferrer'><img alt='alt' src={fb} width='32' height='32'></img></a>
            </div>
          </div>
      </div>
    );
  }
  
  export default Footer;
  