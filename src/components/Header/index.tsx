import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import pic from '../../images/profilePic.png'
import { reduxLogged, reduxUserName } from '../../redux/slices/loginSlice';

export const Header: React.FC = () => {
  
  const username = useSelector(reduxUserName)
  const logged = useSelector(reduxLogged)

    return (
      <div className={styles.headerWrap}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <Link to='/' className={styles.logoLink}><div className={styles.logo}></div></Link>
            <div className={styles.menuL}>
                <Link id="platform" to="/not-found">
                  Platform
                </Link>
                <Link id="plans" to="/not-found">
                  Plans
                </Link>
                <Link id="resources" to="/not-found">
                  Resources
                </Link>
            </div>
          </div>
          <div className={styles.headerRight}>
              <div className={styles.menuR}>
                {
                  logged
                          ? 
                  <div className={styles.loggedIn}>
                    <Link id='profile' to="/profile">{username}<img alt='alt' src={pic} width='48' height='48'></img></Link>
                  </div>
                          : 
                   <Link id="login" to="/login">Login</Link>
                }
                <Link id="getStarted" to="/not-found">
                  Get Started
                </Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  