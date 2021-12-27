import logo from './logo.svg';
import beansLogo from './beans-logo.svg'

import './app-footer.css';

const AppFooter = () => {
  return (
    <footer className='app-footer'>
      <ul>
        <li>
          <img src={logo} alt="Two grains of coffee" />
          <button type='button'>Coffee house</button>
          </li>
        <li><button type='button'>Our coffe</button></li>
        <li><button type='button'>For your pleasure</button></li>
      </ul>
      <img className='beansLogo' src={beansLogo} alt="Three grains of coffee" />
    </footer>
  )
}

export default AppFooter;