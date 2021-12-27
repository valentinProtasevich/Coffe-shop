import cupOfCofee from './cup_of_coffee.png';
import beansLogo from './Beans logo.svg';
import line from './Line.svg'

import './app-goods-about.css'

const AppGoodsAbout = () => {
  return(
    <div>
      <div className='app-goods-about'>
        <img className='cupOfCofee' src={cupOfCofee} alt="White hot cup of coffee. Black background." />
        <div>
        <h2>About our goods</h2>
        <img className='beansLogo' src={beansLogo} alt="Three grains of coffee." />
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
          Afraid at highly months do things on at. Situation recommend objection do intention<br/>
          so questions.<br/>
          As greatly removed calling pleased improve an.<br/>
          Last ask him cold feel<br/>
          met spot shy want. Children me laughing we<br/>
          prospect answered followed. At it went<br/>
          is song that held help face.
        </p>
        </div>
      </div>
      <div className='line'>
        <img src={line} alt="Black line" />
      </div>
    </div>

  )
}

export default AppGoodsAbout;