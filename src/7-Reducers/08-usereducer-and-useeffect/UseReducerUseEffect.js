import React, { useState, useEffect } from 'react';

import UseReducerUseEffectLogin from './usereducer_useeffect_components/Login/UseReducerUseEffectLogin';
import UseReducerUseEffectHome from './usereducer_useeffect_components/Home/UseReducerUseEffectHome';
import UseReducerUseEffectMainHeader from './usereducer_useeffect_components/MainHeader/UseReducerUseEffectMainHeader';

function UseReducerUseEffect() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <UseReducerUseEffectMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseReducerUseEffectLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseReducerUseEffectHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default UseReducerUseEffect;
