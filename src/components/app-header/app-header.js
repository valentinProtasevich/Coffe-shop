import logo from './coffee-logo.svg'

import './app-header.css';

const AppHeader = () => {
  return(
    <div className='app-header'>
      <nav className='main-navigation'>
        <ul>
          <li>
            <img src={logo} alt="Two grains of coffee" />
            <button type='button'>Coffee house</button>
            </li>
          <li><button type='button'>Our coffe</button></li>
          <li><button type='button'>For your pleasure</button></li>
        </ul>
      </nav>
      <h1>For your pleasure</h1>
    </div>
  )
}

export default AppHeader;