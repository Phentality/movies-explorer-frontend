import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Aboutme from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <Promo />
        <AboutProject />
        <Techs />
        <Aboutme />
        <Portfolio />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default Main;